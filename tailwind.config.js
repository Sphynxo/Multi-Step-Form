/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },

      colors: {
        denim: "#022959",
        grey: "#9699AA",
        purple: "#483EFF",
      },

      backgroundImage: {
        "mobile": "url('/images/bg-sidebar-mobile.svg')",
        "desktop": "url('/images/bg-sidebar-desktop.svg')"
      }
    },
  },

  
  plugins: [],
};
