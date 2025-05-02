import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true
  },
  build: {
    chunkSizeWarningLimit: 1000, // augmente le seuil de warning
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'], // React dans un chunk séparé
          antd: ['antd'],
          router: ['react-router-dom'],
        },
      },
    },
  },
});
