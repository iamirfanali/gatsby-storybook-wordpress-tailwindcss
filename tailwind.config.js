module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px", // => @media (min-width: 375px)
      },
      colors: {
        "solid-slate": "#5497B0",
        "solid-zinc": "#22282F",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        md: "1.063rem",
        "xs-xl": "0.813rem",
        "xl-xl": "1.375rem",
        "3xl-xl": "2.125rem",
        "4xl-xl": "2.563rem",
        "10xl": "10rem",
      },
    },
  },
}
