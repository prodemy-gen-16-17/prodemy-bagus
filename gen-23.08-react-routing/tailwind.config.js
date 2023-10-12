/** @type {import('tailwindcss').Config} */

import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography, forms, daisyui],
  daisyui: {
    themes: [
      {
        lights: {
          primary: "#006d1d",
          secondary: "#75ff63",
          accent: "#afd159",
          neutral: "#1c171c",
          "base-100": "#eaeaf0",
          info: "#88b4e2",
          success: "#5bdc9c",
          warning: "#ae7e0f",
          error: "#e8454d",
        },
      },
      "dark",
    ],
    darkTheme: "dark",
  },
};
