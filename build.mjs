import { buildForBrowser } from '@jsheaven/easybuild'

await buildForBrowser({
  entryPoint: './src/index-javascript.ts',
  outfile: './dist/javascript/index.js',
  dts: false,
  debug: process.argv.indexOf('--dev') > -1,
  esBuildOptions: {
    logLevel: 'error',
  },
})

await buildForBrowser({
  entryPoint: './src/index-react.ts',
  outfile: './dist/react/index.js',
  dts: false,
  debug: process.argv.indexOf('--dev') > -1,
  esBuildOptions: {
    logLevel: 'error',
  },
})

await buildForBrowser({
  entryPoint: './src/index-vue.ts',
  outfile: './dist/vue/index.js',
  dts: false,
  debug: process.argv.indexOf('--dev') > -1,
  esBuildOptions: {
    logLevel: 'error',
  },
})