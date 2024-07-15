/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        poppinsMedium: ["poppinsMedium", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
    
      animation: {
        spin: "spin 2s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      borderWidth: {
        4: "4px",
      },
      width: {
        5: "20px",
      },
      height: {
        5: "20px",
      },
    },
  },
  plugins: [],
};
