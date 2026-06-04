/** @type {import('tailwindcss').Config} */
export default {
  // 1. Manual Dark Mode Enable (Switch Button ke liye zaroori)
  darkMode: 'class', 

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 2. Custom Colors (Aapke purane + Naye)
      colors: {
        'nainix-green': '#00ff00', 
        'nainix-dark': '#0a0a0a', 
        'nainix-gray': '#1a1a1a', 
      },
      // 3. Modern Fonts
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Professional Agency Look
        mono: ['Courier New', 'monospace'], // Hacker Look
      },
      // 4. Smooth Animations (Config mein hi define kar diye)
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}