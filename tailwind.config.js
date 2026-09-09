/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      // => @media (max-width: 1279px) { ... }
      lg: { min: "925px" },
    },
  },
  plugins: [],
};


// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideback:{
           '100%': { transform: 'translateX(0%)' },
          '0%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        slide: 'slide 9s linear infinite',
        slideback: 'slide 9s linear infinite',
      },
    },
  },
  plugins: [],
};
