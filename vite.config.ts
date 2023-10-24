import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/catalog',
  resolve: {
    alias: {
      '~app': path.resolve('src/1_app'),
      '~pages': path.resolve('src/2_pages'),
      '~widgets': path.resolve('src/3_widgets'),
      '~features': path.resolve('src/4_features'),
      '~entities': path.resolve('src/5_entities'),
      '~shared': path.resolve('src/6_shared'),
    },
  },
});
