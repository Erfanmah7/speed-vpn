/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        IranSansDN: "IranSans DN",
        IranSans: "IranSans",
        IranSansLight: "IranSans Light",
        IranSansUltraLight: "IranSans  UltraLight",
        IranSansMedium: "IranSans Medium",
        IranSansBold: "IranSans Bold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 #020f20",
        myShadow2: "-4.1px -5px 0 0 #020f20",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "4rem",
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", ["& > *:hover"]);
    },
  ],
};
