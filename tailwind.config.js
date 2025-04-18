// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: '#0a045c',
          secondary: '#180777',
          accent: '#ff6347',
          light: '#f4f4f4',
          dark: '#333',
        },
        fontFamily: {
          sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        },
        boxShadow: {
          default: '0 2px 5px rgba(0,0,0,0.1)',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }