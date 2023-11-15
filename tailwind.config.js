/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1341': '1341px',
      },
      screens: {
        'lg': '1280px',
        'md1': '830px',
        'viewsWidth': '650px',
      },
      colors: {
        customPurple: '#5F25A6',
        customGreen: '#99f42c',
      },
    },
  },
  plugins: [],
}