/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sos': ['Staatliches', 'sans-serif', 'Arial'],
        'beb': ['BebasNeue', 'sans-serif', 'Arial'],
      }
    },
  },
  plugins: [],
}
