/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // <- Isso garante que Tailwind olhe para todos os seus componentes
    "./app/**/*.{js,ts,jsx,tsx}", // <- Se você estiver usando a pasta `app/`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}