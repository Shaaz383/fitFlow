import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss' // Changed from '@tailwindcss/vite'
import path from 'path' // Added path import

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // Now using the correct tailwindcss import
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.js', '.jsx', '.json'] // Added extensions for better resolution
  },
})