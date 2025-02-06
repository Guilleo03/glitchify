import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.cjs.js', format: 'cjs' },
    { file: 'dist/index.esm.js', format: 'esm' },
  ],
  plugins: [
    typescript(),
    terser(), // Minificación
    peerDepsExternal(),
  ],
};
