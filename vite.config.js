import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(), // Ensure React support
    tailwindcss(),
  ],
  base: "/", // Fixes asset path issues on Netlify
})
