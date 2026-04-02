// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Urbanist", "sans-serif"], // custom font family
      },
      screens: {
        "3xl": "1920px", // custom breakpoint
      },
      colors: {
        primary: "#FF9324", // custom brand color
      },
    },
  },
  plugins: [],
};
