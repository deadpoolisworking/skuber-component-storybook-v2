import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  base: './',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    libInjectCss(),
    dts({
      exclude: [
        '**/*.stories.tsx',
        '**/**/*.stories.tsx',
        '**/**/**/*.stories.tsx',
      ],
    }),
  ],
  css: {
    modules: {
      localsConvention: 'dashes',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'skuberComponentStorybook',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return '[name][extname]';
          }
          return '[name]-[hash][extname]';
        },
      },
    },
    emptyOutDir: false,
    cssCodeSplit: false,
    commonjsOptions: {
      esmExternals: ['react'],
    },
  },
});
