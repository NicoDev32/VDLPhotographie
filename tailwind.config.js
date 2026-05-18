/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/components/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
}
