import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/iii-my-gnedby/',
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['onnxruntime-web']
  },
});
