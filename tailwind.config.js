export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(250, 204, 21, 0.28), 0 20px 60px rgba(120, 92, 12, 0.12)',
      },
      colors: {
        sand: {
          50: '#fbf7eb',
          100: '#f5eeca',
          200: '#ebd48c',
          300: '#dfbf57',
          400: '#cda230',
        },
        ink: {
          950: '#0b0f14',
          900: '#11161d',
          800: '#1c2430',
        },
      },
    },
  },
  plugins: [],
};
