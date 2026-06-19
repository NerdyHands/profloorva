import relumePreset from "@relume_io/relume-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [relumePreset],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
};
