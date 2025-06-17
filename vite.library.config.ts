import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/moduleIndex.ts'),
      name: 'ReactUIDesigner',
      fileName: 'moduleIndex',
      formats: ['es', 'cjs', 'umd'] // UMD zusätzlich für Kompatibilität
    },
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'moduleIndex.css') {
            return 'main.css'; // force name main.css instead of moduleIndex.css for compatibility reasons
          }
          if (/\.css$/i.test(assetInfo.name ?? '')) {
            return '[name][extname]';
          }
          if (/fonts?/i.test(assetInfo.name ?? '')) {
            return 'resources/fonts/[name][extname]';
          }
          return 'resources/assets/[name][extname]';
        }
      }
    }
  }
});
