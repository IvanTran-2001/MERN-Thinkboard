import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [daisyui],
  
  daisyui: {
    themes: ["lemonade", "cupcake", "synthwave", "cyberpunk", "coffee", "forest"],
  },
}