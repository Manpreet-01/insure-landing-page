/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Stone_100: 'hsl(30, 54%, 90%)',
        Stone_150: 'hsl(30, 18%, 87%)',
        Stone_600: 'hsl(30, 10%, 34%)',
        Stone_900: 'hsl(24, 5%, 18%)',
        Brown_800: 'hsl(14, 45%, 36%)',
        Rose_800: 'hsl(332, 51%, 32%)',
        Rose_50: 'hsl(330, 100%, 98%)',
      },
      fontSize: {
        'base': '18px'
      },
      fontWeight: {
        thin_400: 400,
        med_600: 600,
        thick_700: 700,
      },
      // fontFamily: {
      //   "display": ["poppins", "sans-serif"],
      //   "body": ["inter", "sans-serif"]
      // }
    },
  },
  plugins: [],
};