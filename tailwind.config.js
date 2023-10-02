/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class' //nos sirve para agrega el modo dark, con preferencias del usuario, osea con el boton
};

