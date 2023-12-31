/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // important: "#root",
  theme: {
    screens: {
      sm: { min: "320px", max: "480px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "481px", max: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "769px", max: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1025px", max: "1200px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1201px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        primary: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
        secondary: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
        footer: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
        profile: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
        blog: "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)",
        liked: "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
      },
      backgroundColor: {
        primary: "#8EC5FC",
        secondary: "#D9AFD9",
        footer: "#8BC6EC",
        profile: "#FFDEE9",
        blog: "#FBDA61",
        liked: "#74EBD5",
      },
    },
  },
  plugins: [],
};
