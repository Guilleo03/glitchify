import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: false,
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: false,
    },
  ],
  plugins: [
    alias({
      entries: [{ find: /^stories/, replacement: '' }],
    }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      rootDir: 'src',
    }),
    postcss({
      minimize: true,
      modules: true,
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
};
