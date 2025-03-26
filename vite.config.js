import path from 'path' // <-- Add this import at the top
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Import the path module to resolve aliases


// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: ['.js', '.jsx', '.json'] // Added extensions for better resolution

  },
})