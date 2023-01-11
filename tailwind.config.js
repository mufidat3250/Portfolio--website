/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'risevest':'/public/imgs/risevest-clone.png' ,
        'hayak': '/public/imgs/hayak.png'
      },
      rotate: {
        '360': '360deg',
      }
    },
  },
  plugins: [],
}
