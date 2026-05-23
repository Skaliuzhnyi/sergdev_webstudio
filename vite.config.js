import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          i18n: ['react-i18next', 'i18next'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
