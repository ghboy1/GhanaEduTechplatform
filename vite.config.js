import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensure root URL serving
  root: '.',  // Explicit project root
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})