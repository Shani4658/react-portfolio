/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'gradient-blue-black': '0 4px 10px rgba(100,100,100,0.7), 0 6px 20px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [],
}

