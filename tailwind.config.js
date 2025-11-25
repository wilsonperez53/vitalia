// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vitaliaGreen: "#2E7D32",   // Verde principal
        vitaliaBlue: "#0288D1",    // Azul secundario
        vitaliaYellow: "#FBC02D",  // Amarillo acento
        vitaliaGray: "#F5F5F5"     // Fondo claro
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Fuente limpia y legible
      },
      backgroundImage: {
        'vitalia-logo': "url('/screens/logo.png')", // Ruta del logo
      }
    }
  },
  plugins: [],
}
