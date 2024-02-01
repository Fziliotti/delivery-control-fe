import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Configuracao do vite, para que quando fazer o build, as importações com @ sejam entendidas.
      '@': path.resolve(__dirname, './src'),
    },
  },
})
