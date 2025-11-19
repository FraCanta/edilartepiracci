/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        "2xs": "375px",
        sm: "390px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1500px",
        "2xla": "1800px",
        fxl: "1920px",
        "3xl": "2560px",
        "4xl": "3840px",
      },
      fontFamily: {
        // aggiungi le tue famiglie personalizzate
      },
      colors: {
        black: "#1e211e",
      },
    },
  },
  plugins: [],
};
