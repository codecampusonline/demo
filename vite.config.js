import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/demo",
  
  plugins: [react()],
  server: {
    historyApiFallback: true, // enable SPA fallback
  }
})
