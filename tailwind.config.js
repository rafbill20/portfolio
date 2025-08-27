/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000319",
        second: "#15196A",
        third: "#371568",
      },
      fontFamily: {
        plusJakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        main: "url('../public/assets/background/Kotak.png')",
        coba: "url('../public/assets/background/coba.png')",
      },
    },
  },
  plugins: [],
};
