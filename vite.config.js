import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Set the base path for GitHub Pages deployment
  // Replace 'maa-laxmi-dhaba' with your actual repository name if it's different
  base: '/maa-laxmi-dhaba/',
  plugins: [react()],
});
