/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#e5f8e5',
          200: '#ccefd3',
          300: '#b3e6c1',
          800: '#336633',
        },
      },
    },
  },
  plugins: [],
};