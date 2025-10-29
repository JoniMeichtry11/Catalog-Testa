/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        'th-orange-primary': 'var(--th-orange-primary)',
        'th-orange-dark': 'var(--th-orange-dark)',
        'th-metal-light': 'var(--th-metal-light)',
        'th-metal-mid': 'var(--th-metal-mid)',
        'th-metal-dark': 'var(--th-metal-dark)',
        'th-bg-dark': 'var(--th-bg-dark)',
        'th-accent-glow': 'var(--th-accent-glow)',
      },
      backgroundImage: {
        'th-gradient-fire': 'var(--th-gradient-fire)',
        'th-gradient-metal': 'var(--th-gradient-metal)',
      }
    },
  },
  plugins: [],
};
