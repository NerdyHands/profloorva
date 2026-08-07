"use client";

import { importLibrary, setOptions } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef, useState } from "react";

const HAMPTON_ROADS_BOUNDS = {
  north: 37.45,
  south: 36.7,
  east: -75.9,
  west: -77.0,
};

const DEFAULT_CLASS =
  "w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-amber-700 focus:outline-none";

let placesPromise = null;

function loadPlacesLibrary() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return Promise.reject(
      new Error(
        "Google Maps is not configured. Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in .env.local.",
      ),
    );
  }

  if (!placesPromise) {
    setOptions({
      key: apiKey,
      v: "weekly",
    });
    placesPromise = importLibrary("places");
  }

  return placesPromise;
}

/**
 * Address input backed by Google Places Autocomplete.
 * Submit is only valid after the user picks a suggestion (not free-typed text).
 */
export function AddressAutocomplete({
  name = "address",
  placeholder = "Property Address",
  className = DEFAULT_CLASS,
  disabled = false,
  required = true,
  onSelectionChange,
  id,
}) {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [value, setValue] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const isValidSelection = Boolean(
      selectedPlace?.placeId &&
        selectedPlace?.formattedAddress &&
        selectedPlace.formattedAddress === value,
    );
    onSelectionChange?.({
      isValidSelection,
      address: isValidSelection ? selectedPlace.formattedAddress : "",
      placeId: isValidSelection ? selectedPlace.placeId : "",
    });
  }, [selectedPlace, value, onSelectionChange]);

  useEffect(() => {
    let cancelled = false;
    let listener = null;

    loadPlacesLibrary()
      .then((places) => {
        if (cancelled || !inputRef.current || autocompleteRef.current) return;

        const Autocomplete = places.Autocomplete;
        const autocomplete = new Autocomplete(inputRef.current, {
          fields: ["formatted_address", "place_id"],
          types: ["address"],
          componentRestrictions: { country: "us" },
          bounds: HAMPTON_ROADS_BOUNDS,
          strictBounds: false,
        });

        autocompleteRef.current = autocomplete;

        listener = autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          const formattedAddress = place?.formatted_address?.trim() || "";
          const placeId = place?.place_id || "";

          if (!formattedAddress || !placeId) {
            setSelectedPlace(null);
            return;
          }

          setValue(formattedAddress);
          setSelectedPlace({ formattedAddress, placeId });
        });
      })
      .catch((error) => {
        if (!cancelled) {
          setLoadError(
            error instanceof Error
              ? error.message
              : "Address autocomplete failed to load.",
          );
          setSelectedPlace(null);
        }
      });

    return () => {
      cancelled = true;
      if (listener && window.google?.maps?.event) {
        window.google.maps.event.removeListener(listener);
      }
      autocompleteRef.current = null;
    };
  }, []);

  const handleChange = (event) => {
    const next = event.target.value;
    setValue(next);
    setSelectedPlace((prev) => {
      if (prev && next === prev.formattedAddress) return prev;
      return null;
    });
  };

  return (
    <>
      <input
        ref={inputRef}
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={className}
        required={required}
        disabled={disabled || Boolean(loadError)}
        autoComplete="off"
      />
      <input
        type="hidden"
        name={`${name}PlaceId`}
        value={selectedPlace?.placeId || ""}
        readOnly
      />
      {loadError ? (
        <p className="text-sm text-red-600" role="alert">
          {loadError}
        </p>
      ) : null}
    </>
  );
}
