import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    historyApiFallback: true // 👈 This is critical for React Router to work with slugs
  },
  build: {
    sourcemap: true
  }
});
