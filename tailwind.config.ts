import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1e40af",

          "primary-content": "#fff",

          secondary: "#00d4fb",

          "secondary-content": "#001015",

          accent: "#4f46e5",

          "accent-content": "#020e00",

          neutral: "#9d174d",

          "neutral-content": "#c9c9c9",

          "base-100": "#e7ffff",

          "base-200": "#c9dede",

          "base-300": "#abbebe",

          "base-content": "#131616",

          info: "#00b0e8",

          "info-content": "#1e3a8a",

          success: "#50b700",

          "success-content": "#070c00",

          warning: "#e88600",

          "warning-content": "#130600",

          error: "#dc2626",

          "error-content": "#1c1917",
        },
      },
    ],
  },
  plugins: [daisyui],
  darkMode: ["class", '[data-theme="night"]'],
};
export default config;
