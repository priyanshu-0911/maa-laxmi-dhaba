// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // When running the local development server (`npm run dev`), command will be 'serve'
  if (command === 'serve') {
    return {
      // Dev server specific config
      plugins: [react()],
      // No 'base' property is needed, it defaults to '/' which is correct for localhost
    }
  } else {
    // When building for production (`npm run build`), command will be 'build'
    return {
      // Build specific config
      plugins: [react()],
      base: '/maa-laxmi-dhaba/', // This is ONLY used for the build, not for local dev
    }
  }
})