import { defineConfig } from 'tsup';
import cssModulesPlugin from 'esbuild-css-modules-plugin';

export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['./src/index.ts'],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  minify: true,
  esbuildPlugins: [cssModulesPlugin()],
  // injectStyle: true,
});
