import serve from 'rollup-plugin-serve'
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload'
import scss from 'rollup-plugin-scss'
import xml from "rollup-plugin-xml";


export default [
  {
    input: 'src/main.ts',
    output: [
      {
        file: 'dist/bundle.es.js',
        format: 'esm',
      },
    ],
    plugins: [
      scss({
        output: 'dist/bundle.css',
        include: [
          '/Users/simon/odoo/owl_playground/owl_playground_ts/src/components/app/app.scss'
        ]
      }),
      xml({
        format:"XMLDocument"//"compact" | "non-compact" | "XMLDocument"
      }),
      typescript(),
      nodeResolve(),
      serve({
        open: false,
        verbose: true,
        contentBase: ['dist', 'public'],
        host: 'localhost',
        port: 10001,
      }),
      livereload()
    ]
  }];
