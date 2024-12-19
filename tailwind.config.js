/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#1C1E53",
        secondary: "#282938",
        triary: "#232536",
        warning: "#FCD980",
        subtext: "#535353",
        breadcrumb: "#EEF4FA",
        active: "#2405F2",
        success: "#21A099",
        icon: "#818181",
        background: "#F4F6FC",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        geist: ["Geist Mono", "serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
