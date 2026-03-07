import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,        // Permite que el contenedor sea accesible desde fuera
    port: 5173,        // Asegura que use el puerto que mapeamos en Docker
    watch: {
      usePolling: true, // Esto es CLAVE para que detecte cambios en Windows/Docker
    },
  },
})