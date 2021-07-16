import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
// import scss from 'rollup-plugin-scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: './src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: './dist/index.es.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({
      exclude: ['node_modules/**', 'src/stories'],
      presets: ['@babel/preset-react'],
      babelHelpers: 'runtime',
    }),
    typescript({ tsconfig: './tsconfig.json' }),
    // scss(),
    postcss(),
  ],
};

// import { babel } from '@rollup/plugin-babel';
// // import babel from 'rollup-plugin-babel';
// import resolve from '@rollup/plugin-node-resolve';
// import external from 'rollup-plugin-peer-deps-external';
// import typescript from '@rollup/plugin-typescript';
// import scss from 'rollup-plugin-scss';

// export default [
//   {
//     input: 'src/index.ts',
//     output: [
//       {
//         file: 'dist/index.js',
//         format: 'cjs',
//         // sourcemap: true,
//       },
//       {
//         file: 'dist/index.es.js',
//         format: 'es',
//         // exports: 'named',
//         // sourcemap: true,
//       },
//     ],
//     plugins: [
//       external(),
//       resolve(),
//       typescript(),
//       scss(),
//       babel({
//         exclude: ['node_modules/**', 'src/stories'],
//         presets: ['@babel/preset-react'],
//         babelHelpers: 'runtime',
//       }),
//     ],
//   },
// ];
