export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f1117',
        surface: 'rgba(255, 255, 255, 0.03)',
        accent: '#e8c97a',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0, 0, 0, 0.18)',
      },
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
