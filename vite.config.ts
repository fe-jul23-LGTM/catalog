import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/catalog',
  resolve: {
    alias: {
      '~assets': path.resolve('src/assets'),
      '~components': path.resolve('src/components'),
      '~styles': path.resolve('src/styles'),
    },
  },
});
