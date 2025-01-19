/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          1: "#F3F3F1",
          2: "#EFEDED",
          3: "#E9E8E8",
          4: "#DADADA",
          5: "#A5A5A5",
          6: "#8B8986",
          7: "#736E69",
          8: "#454343",
        },
        black: {
          1: "#212121",
          2: "#000000",
        },
        green: {
          1: "#E6EDD5",
          2: "#D4E0B9",
          3: "#B8C895",
          4: "#BEC2B3",
          5: "#586A31",
          6: "#414F22",
          7: "#1C2820",
        },
        orange: {
          1: "#BC6C25",
        },
      },
    },
  },
  plugins: [],
};