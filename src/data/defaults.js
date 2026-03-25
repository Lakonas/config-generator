export const defaultOptions = {
  prettier: {
    semicolons: true,
    quotes: 'single',
    indentWidth: 2,
    tabs: false,
    trailingComma: 'es5',
    printWidth: 80,
  },
  eslint: {
    strict: true,
  },
  typescript: {
    target: 'ES2022',
    module: 'ESNext',
    strict: true,
    outDir: './dist',
    pathAliases: false,
    jsx: 'react-jsx',
    noUnusedLocals: true,
    noUnusedParameters: true,
    noFallthroughCasesInSwitch: true,
  },
  editorconfig: {
    indentStyle: 'space',
    indentSize: 2,
    trimWhitespace: true,
    finalNewline: true,
  },
  docker: {
    nodeVersion: '20',
    multiStage: false,
    target: 'development',
    port: 3000,
  },
  jest: {
    testEnvironment: 'node',
    pathAliases: false,
    coverage: true,
    coverageThreshold: 80,
  },
};