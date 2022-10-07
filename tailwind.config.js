/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'steel-blue': '#4369b2',
        'cornflower-blue': '#5487e2ff',
        'strip-blue': '#335185ff',
        'dark-blue': '#3e61a4ff',
        'dark-gray': '#1d1d1dff',
      },
    },
  },
  plugins: [],
};
