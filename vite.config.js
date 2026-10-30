import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative assets resolution for GitHub Pages and local builds
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
