import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['./src'] }),
    copy({
      targets: [
        { src: 'src/SetupPackage.cjs', dest: 'dist' }
      ],
      hook: 'writeBundle'
    })],
  base: './',
  resolve: { // solves the problem with link modules and different react instances
    dedupe: ['react', 'react-dom']
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/moduleIndex.ts'),
      name: '@sibvisions/reactui-designer',
      fileName: 'moduleIndex',
      formats: ['es', 'umd', 'cjs'] // Order is essential as umd build uses structures of previous cjs build, which can cause problems
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
          const name = assetInfo.names?.[0] ?? '';
          if (name === 'moduleIndex.css') {
            return 'main.css'; // force name main.css instead of moduleIndex.css for compatibility reasons
          }
          if (/\.css$/i.test(name)) {
            return '[name][extname]';
          }
          if (/fonts?/i.test(name)) {
            return 'resources/fonts/[name][extname]';
          }
          return 'resources/assets/[name][extname]';
        },
        // prevent extra auto.esm*.js due to chart.js
        //inlineDynamicImports: true, // deprecated
        codeSplitting: false,
        manualChunks: undefined
      }
    }
  }
});
