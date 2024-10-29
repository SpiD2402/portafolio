/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar'
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Asegúrate de incluir todas las extensiones relevantes
  theme: {
    extend: {
      fontFamily:{
          customP: ['Gowun Batang'],
      },
      fontSize:{
        customSize :'1.3rem'
      },
      screens:{
        'custom':'900px',
        'custom-page':'1200px',
        'custom-sobre':'1100px',
        'custom-icon':'700px'
      },
      colors:{
        'sidebar-color': "#1C1C1C"
      }
    },
  },
  plugins: [
    scrollbar

  ],
}