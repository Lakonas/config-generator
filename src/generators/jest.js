export function generateJest(options, stack) {
  const config = {};

  if (stack.includes('typescript')) {
    config.preset = 'ts-jest';
  }

  config.testEnvironment = options.testEnvironment || 'node';

  config.testMatch = [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ];

  if (options.pathAliases) {
    config.moduleNameMapper = {
      '^@/(.*)$': '<rootDir>/src/$1',
    };
  }

  if (options.coverage) {
    config.collectCoverage = true;
    config.coverageDirectory = 'coverage';
    config.coverageThresholds = {
      global: {
        branches: options.coverageThreshold || 80,
        functions: options.coverageThreshold || 80,
        lines: options.coverageThreshold || 80,
        statements: options.coverageThreshold || 80,
      },
    };
  }

  return `export default ${JSON.stringify(config, null, 2)};
`;
}