/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero1': "url('/assets/background1.jpg')",
        'hero2': "url('/assets/background2.jpg')",
      },
      fontFamily: {
        lora: ['Lora'],
        hoover: ['Hoover'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        typewriter: {
        '0%': { width: '0ch' },
        '100%': { width: '35ch' }, 
      },
      blinkCaret: {
        '0%, 100%': { borderColor: 'transparent' },
        '50%': { borderColor: 'currentColor' },
      },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        typewriter: 'typewriter 4s steps(35) 1s forwards', // 4s pour taper le texte
        blinkCaret: 'blinkCaret 0.7s step-end infinite',
      },
    },
  },
  plugins: [],
}
