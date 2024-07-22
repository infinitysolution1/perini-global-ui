/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "text-reveal":
          "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1)  0.5s ",
        slideUp: "slideUp 2s ease-in-out var(--slidein-delay, 0) forwards",
        bounce: "bounce 4s infinite",
        slideInLeft: "slideInLeft 2s  ease-in-out",
        slideInRight: "slideInRight 2s ease-in-out",
        slideOutLeft: "slideOutLeft 2s ease-in-out",
        slideOutRight: "slideOutRight 2s ease-in-out",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(5vh)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-30vw)", opacity: 0 },
          "100%": { transform: "translateX(-10vw)", opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(30vw)", opacity: 0 },
          "100%": { transform: "translateX(10vw)", opacity: 1 },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-10vw)" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(10vw)" },
        },
      },
    },
  },
  plugins: [],
};
