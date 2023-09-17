module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f9f9f9",
          300: "#e3e3e3",
          400: "#cacaca",
          600: "#797979",
          900: "#081539",
          "900_02": "#041434",
          "900_01": "#242331",
        },
        blue_gray: { 100: "#d3d3d3", 700: "#4a556c", 800: "#333461" },
        deep_orange: { 600: "#f55b14" },
        deep_purple: { A400: "#5135ff" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        nunito: "Nunito",
        kumbhsans: "Kumbh Sans",
        poppins: "Poppins",
        jost: "Jost",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
