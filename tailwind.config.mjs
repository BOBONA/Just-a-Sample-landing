import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Inria Sans", ...defaultTheme.fontFamily.sans],
        "logo": ["Bungee Shade"]
      },
      colors: {
        "backdrop": "#fdf6c3",
        "dark": "#171614",
        "mint": "#eafff7",
        "highlight": "#ff595e",

        "github": "#1a1f25",
        "itchio": "#fa5c5c",
        "boutique": "#00a3dd",
        "kvr": "#a1a1a1"
      },

      screens: {
        portrait: { raw: 'orientation: portrait' },
      }
    }
  },
};
