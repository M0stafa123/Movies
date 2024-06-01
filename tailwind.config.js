/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#1C3144",
        body: "#88A09E",
        pagination: "#EEF0F2",
        white: "#ECF0F1",
      },
      backgroundImage: {
        bodyImg: 'url("../public/images/bg.jpg")',
        mainGradiant: "linear-gradient(to top,#081c2f ,#081c2f,#1c31448c)",
        detailsGradiant: "linear-gradient(to top,#081c2f ,#1c31448c)",
      },
      screens: {
        full: { min: "1650px" },
      },
    },
  },
  plugins: [],
};
