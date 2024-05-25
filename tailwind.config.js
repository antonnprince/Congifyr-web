/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
     
      colors:{
        col1:'#898989',
        col2:'#c2c3c3',
      }
    },
  },
  plugins: [],
}