/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
  extend: {
    colors:{
      //header:"#fecaca",
      header:"#ffe6cc",
     primary:"#f59e0b",
    //primary:"#c2410c",
      bgcolor:"#FCFCFC",
      red:"#ff6868",
      secondary:"#64748b",
      w:"#f8fafc"
    },
  },
},
  plugins: []
};