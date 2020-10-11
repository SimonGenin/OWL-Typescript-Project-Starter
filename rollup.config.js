import serve from 'rollup-plugin-serve'
import typescript from 'rollup-plugin-typescript2';
import commonJS from 'rollup-plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import autoExternal from 'rollup-plugin-auto-external';
import path from 'path';
import pkg from './package.json'

console.log(path.resolve( __dirname, 'node_modules/@odoo/owl/dist/owl-iife.js'))

export default [
  {
    input: 'content/src/main.ts',
    output: [
      {
        file: pkg.cjs,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      },
      {
        file: pkg.iife,
        format: 'iife',
        globals: {
          '@odoo/owl': 'owl',
        }
      },
    ],
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      nodeResolve(),
      serve({
        open: true,
        verbose: true,
        contentBase: ['content/dist', 'content/public'],
        host: 'localhost',
        port: 10001,
      })
    ]
  }];
