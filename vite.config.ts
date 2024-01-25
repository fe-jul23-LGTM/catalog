import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/catalog',
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '~assets': path.resolve('src/assets'),
      '~components': path.resolve('src/components'),
      '~styles': path.resolve('src/styles'),
      '~routers': path.resolve('src/routers'),
      '~context': path.resolve('src/context'),
      '~types': path.resolve('types'),
      '~helpers': path.resolve('src/helpers'),
      '~public': path.resolve('public'),
    },
  },
});
