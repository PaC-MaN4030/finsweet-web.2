/** @type {import('tailwindcss').Config} */
export default {
  content: ["./blog.html"],
  theme: {
    extend: {
      colors: { "main-font-color": "#282938" },
      padding: { "p-m": "128px 160px" },
      fontFamily:{"family":"finsweet"}
    },
  },
  plugins: [],
};
