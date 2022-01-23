import esbuild from 'rollup-plugin-esbuild';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import pkg from './package.json';

const name = pkg.main.replace(/\.js$/, '')

const bundle = config => ({
  ...config,
  input: 'src/app.ts',
  // external: id => !/^[./]/.test(id),
})

export default [
  bundle({
    plugins: [
      esbuild(),
      nodeResolve(),
      commonjs(),
      json({
        compact: true
      })
    ],
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
      },
      {
        file: `${name}.mjs`,
        format: 'es',
      },
    ],
  })
]