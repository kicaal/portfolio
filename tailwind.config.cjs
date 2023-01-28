/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        pinkGradient: "#E70FAA",
        blueGradient: "#00C0FD",
      },
    },
  },
  plugins: [],
};
