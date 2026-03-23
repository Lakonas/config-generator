export function generateTypescript(options, stack) {
  const compilerOptions = {
    target: options.target,
    module: options.module,
    strict: options.strict,
    esModuleInterop: true,
    skipLibCheck: true,
    forceConsistentCasingInFileNames: true,
  };

  if (stack.includes('react')) {
    compilerOptions.jsx = 'react-jsx';
  } else if (options.jsx) {
    compilerOptions.jsx = options.jsx;
  }

  if (options.outDir) {
    compilerOptions.outDir = options.outDir;
  }

  if (options.pathAliases) {
    compilerOptions.baseUrl = '.';
    compilerOptions.paths = {
      '@/*': ['./src/*'],
    };
  }

  const config = { compilerOptions };

  if (stack.includes('nextjs')) {
    config.include = ['next-env.d.ts', '**/*.ts', '**/*.tsx'];
    config.exclude = ['node_modules'];
  }

  return JSON.stringify(config, null, 2);
}