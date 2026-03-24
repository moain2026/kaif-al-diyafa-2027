/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1600px',
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-ibm-plex-arabic)", "var(--font-tajawal)", "'IBM Plex Sans Arabic'", "'Tajawal'", "'IBM Plex Sans'", 'sans-serif'],
        tajawal: ["var(--font-tajawal)", "var(--font-ibm-plex-arabic)", 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        // LUXURY BLACK PALETTE (NO PURE BLACK)
        luxury: {
          black: '#121212',      // Baseline depth
          deep: '#0A0A0A',       // High-contrast sections
          rich: '#050505',       // Maximum contrast
          elevated: '#1A1A1A',   // Elevated surfaces
          surface: '#242424',    // Card backgrounds
        },
        // LUXURY GOLD PALETTE
        gold: {
          DEFAULT: '#D4AF37',    // Primary Gold
          primary: '#D4AF37',
          highlight: '#F9E488',  // Champagne Highlight
          bronze: '#B8860B',     // Dark Goldenrod
          aged: '#8B7D50',       // Aged Brass
          deep: '#6B4E16',       // Deep Bronze Shadow
          metallic: '#D3AF37',
          chinese: '#CD9900',
          coin: '#A57D02',
        },
        cream: {
          DEFAULT: '#F5F5DC',
          light: '#F2F2F2',
          muted: '#E0E0E0',
        },
      },
      backgroundImage: {
        'gold-shine': 'linear-gradient(90deg, #D4AF37 0%, #F9E488 50%, #B8860B 100%)',
        'gold-button': 'linear-gradient(135deg, #D4AF37 0%, #F9E488 50%, #D4AF37 100%)',
        'luxury-gradient': 'linear-gradient(135deg, #121212 0%, #0A0A0A 100%)',
        'matte-gold-card': 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(139, 125, 80, 0.05) 100%)',
      },
      boxShadow: {
        'luxury-card': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'luxury-card-hover': '0 12px 48px rgba(212, 175, 55, 0.2)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.3)',
        'gold-button': '0 4px 15px rgba(212, 175, 55, 0.4)',
      },
    },
  },
  plugins: [],
};
