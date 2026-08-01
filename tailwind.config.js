const relumePreset = require("@relume_io/relume-tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [relumePreset],
  content: [
    "./app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/views/**/*.{js,jsx}",
  ],
};
