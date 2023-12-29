import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { useEffect } from 'react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000 // Set your desired limit in kilobytes
  }

})


