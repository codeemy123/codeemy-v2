import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

export default defineConfig({
  plugins: [react()],
  base: "/",  // important: starts and ends with slash for GitHub Pages

  server: {
    host: true,
    allowedHosts: 'all'
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // avoid over-splitting
      },
    },
  },
  // Add this to create .nojekyll during build
  buildEnd: () => {
    const nojekyllPath = resolve(__dirname, 'dist/.nojekyll')
    fs.writeFileSync(nojekyllPath, '')
  },
})

