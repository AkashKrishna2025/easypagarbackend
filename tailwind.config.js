/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        'primary': '#B9D9EB',
        'custom-bg': '#ffff',
        'main-color':'#1e3a8a',
        'blue-bg':'#f0f8ff',
        'navbar': '#420ede',
        'blue-shade2':'#2504bc',
        'customPurple': '#3801b6',
        'text-secondary':'#343A40',
        

      },
      backgroundColor: {
        'custom-bg': '#b5ddff47',
        'pricie-bg':'#3801b6'

      },

      backgroundImage: theme => ({
        'custom-bg1': "url('/src/assets/codifyformatter.png')",
        
      }),
    },
  },
  plugins: [],
}