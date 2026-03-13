import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: { // solves the problem with link modules and different react instances
    dedupe: ['react', 'react-dom']
  },
  build: {
    outDir: 'build',
    assetsDir: 'static',
    sourcemap: true,
    cssCodeSplit: true,
    minify: true,
    chunkSizeWarningLimit: 2000,
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
          const name = assetInfo.names?.[0] ?? '';
          const ext = name.split('.').pop();
          if (ext === 'css') {
            return 'static/css/[name]-[hash][extname]';
          }
          return 'static/media/[name]-[hash][extname]';
        },
        manualChunks: (id: string) => {
          if (id.includes('node_modules')) {
            return 'vendor'; // avoid extra auto.esm.*.js and pack all modules into vendor
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
