/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // 指定したファイルのみにtailwindcssが適用されるようにする
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
