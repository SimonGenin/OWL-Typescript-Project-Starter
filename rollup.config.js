import serve from 'rollup-plugin-serve'
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload'


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
      typescript(),
      nodeResolve(),
      serve({
        open: true,
        verbose: true,
        contentBase: ['dist', 'public'],
        host: 'localhost',
        port: 10001,
      }),
      livereload()
    ]
  }];
