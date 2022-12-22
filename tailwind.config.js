/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      cm: "440px",
      cl: "490px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: { "space-grotesk": ["Space Grotesk", "sans-serif"] },
      colors: {
        primary: "hsl(278, 68%, 11%)",
        primaryLight: "hsl(249, 99%, 64%)",
        secondary: "hsl(0, 0%, 100%)",
        secondaryDark: "hsl(270, 3%, 87%)",
        tertiary: "hsl(279, 6%, 55%)",
        errorColor: "hsl(0, 100%, 66%)",
        borderOutline: "hsl(278, 94%, 30%)",
      },
      backgroundImage: {
        cardFrontImg: "url('/src/images/bg-card-front.png')",
        cardBackImg: "url('/src/images/bg-card-back.png')",
        bgDesktopImg: "url('/src/images/bg-main-desktop.png')",
        bgMobileImg: "url('/src/images/bg-main-mobile.png')",
        complateImg: "url('/src/images/icon-complete.svg')",
      },
    },
  },
  plugins: [],
};
