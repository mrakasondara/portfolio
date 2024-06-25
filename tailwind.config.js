/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*{js,jsx}",
  ],
  theme: {
    extend: {
      'fontFamily': {
        'poppins': 'poppins',
        'Roboto': 'Roboto',
      },
      'colors': {
        'primary': '#10b981',
      },
      
    },
  },
  plugins: [],
}

