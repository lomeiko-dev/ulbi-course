import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSvgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      viteSvgr({
        exportAsDefault: true
      }),
  ],
  resolve:{
    alias: {
      app: '/src/app',
      pages: '/src/pages',
      widgets: '/src/widgets',
      features: '/src/features',
      entities: '/src/entities',
      shared: '/src/shared'
    }
  },
})
