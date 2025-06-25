import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  build: {
    outDir: 'build',
    assetsDir: 'static',
    sourcemap: true,
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'index') { // change index-hash.js to main.hash.js
            return 'static/js/main.[hash].js';
          }
          return 'static/js/[name].[hash].js';
        },
        chunkFileNames: 'static/js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop();
          if (ext === 'css') {
            return 'static/css/[name]-[hash][extname]';
          }
          return 'static/media/[name]-[hash][extname]';
        },
        manualChunks: (id: string) => {
          if (id.includes('node_modules')) {
            return 'vendor'; // avoid extra auto.esm.*.js
          }
        }
        // default generation
//        manualChunks: {
//          vendor: ['react', 'react-dom']
//        }
      }
    }
  }
});
