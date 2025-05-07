import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
main
    allowedHosts: ['urdc.onrender.com'],

main
    host: "::",
    port: 3000,
  },
})
