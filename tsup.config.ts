import { defineConfig } from 'tsup';
import stylePlugin from 'esbuild-style-plugin';

export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['./src/index.ts'],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  minify: true,
  esbuildPlugins: [
    stylePlugin({
      extract: true,
    }),
  ],
  outDir: 'dist',
  external: ['react'],
  // injectStyle: true,
});
