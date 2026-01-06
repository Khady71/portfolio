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
       float: {
          '0%, 100%': { 
            transform: 'translateY(0px)',
          },
          '50%': { 
            transform: 'translateY(-20px)',
          },
        },
         typewriter: {
          '0%': { 
            width: '0',
          },
          '100%': { 
            width: '100%',
          },
        },
        blinkCaret: {
          '0%, 100%': { 
            borderColor: 'transparent',
          },
          '50%': { 
            borderColor: 'white',
          },
        },
         fadeIn: {
          '0%': { 
            opacity: '0',
          },
          '100%': { 
            opacity: '1',
          },
        },
        slideInLeft: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        'pulse-soft': {
          '0%, 100%': { 
            opacity: '1',
          },
          '50%': { 
            opacity: '0.8',
          },
        },
      },
       animation: {
        // Animation de flottement pour la photo
        'float': 'float 6s ease-in-out infinite',
        
        // Animation typewriter (pour le texte)
        'typewriter': 'typewriter 4s steps(60) 1s forwards',
        
        // Clignotement du curseur
        'blinkCaret': 'blinkCaret 0.75s step-end infinite',
        
        // Apparition en fondu
        'fadeIn': 'fadeIn 1s ease-out forwards',
        
        // Slide depuis la gauche
        'slideInLeft': 'slideInLeft 0.8s ease-out forwards',
        
        // Slide depuis la droite
        'slideInRight': 'slideInRight 0.8s ease-out forwards',
        
        // Apparition avec scale
        'scaleIn': 'scaleIn 0.6s ease-out forwards',
        
        // Pulse subtil
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
