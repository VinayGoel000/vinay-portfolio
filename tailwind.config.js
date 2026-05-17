export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        surface: 'rgba(15, 23, 42, 0.72)',
        surface2: 'rgba(11, 17, 36, 0.95)',
        accent: '#65d6ff',
        accent2: '#8b5cf6',
        glow: '#4f46e5',
      },
      boxShadow: {
        glow: '0 0 60px rgba(79, 70, 229, 0.22)',
        soft: '0 40px 120px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.16), transparent 45%), radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.2), transparent 20%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
