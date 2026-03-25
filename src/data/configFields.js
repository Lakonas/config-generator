export const configFields = {
  prettier: [
    { key: 'tabs', label: 'Use Tabs', type: 'toggle' },
    { key: 'indentWidth', label: 'Indent Width', type: 'radio', options: [2, 4] },
    { key: 'semicolons', label: 'Semicolons', type: 'toggle' },
    { key: 'quotes', label: 'Quotes', type: 'radio', options: ['single', 'double'] },
    { key: 'trailingComma', label: 'Trailing Commas', type: 'radio', options: ['none', 'es5', 'all'] },
    { key: 'printWidth', label: 'Print Width', type: 'radio', options: [80, 100, 120] },
  ],
  eslint: [
    { key: 'strict', label: 'Strict Mode', type: 'toggle' },
  ],
  typescript: [
    { key: 'strict', label: 'Strict Mode', type: 'toggle' },
    { key: 'target', label: 'Target', type: 'radio', options: ['ES2020', 'ES2022', 'ESNext'] },
    { key: 'module', label: 'Module', type: 'radio', options: ['CommonJS', 'ESNext'] },
    { key: 'outDir', label: 'Output Directory', type: 'radio', options: ['./dist', './build'] },
    { key: 'pathAliases', label: 'Path Aliases (@/)', type: 'toggle' },
    { key: 'noUnusedLocals', label: 'No Unused Locals', type: 'toggle' },
    { key: 'noUnusedParameters', label: 'No Unused Parameters', type: 'toggle' },
    { key: 'noFallthroughCasesInSwitch', label: 'No Fallthrough Cases', type: 'toggle' },
  ],
  editorconfig: [
    { key: 'trimWhitespace', label: 'Trim Trailing Whitespace', type: 'toggle' },
    { key: 'finalNewline', label: 'Insert Final Newline', type: 'toggle' },
  ],
  docker: [
    { key: 'nodeVersion', label: 'Node Version', type: 'radio', options: ['18', '20', '22'] },
    { key: 'multiStage', label: 'Multi-stage Build', type: 'toggle' },
    { key: 'target', label: 'Target', type: 'radio', options: ['development', 'production'] },
  ],
  jest: [
    { key: 'testEnvironment', label: 'Test Environment', type: 'radio', options: ['node', 'jsdom'] },
    { key: 'pathAliases', label: 'Path Aliases (@/)', type: 'toggle' },
    { key: 'coverage', label: 'Collect Coverage', type: 'toggle' },
    { key: 'coverageThreshold', label: 'Coverage Threshold', type: 'radio', options: [60, 70, 80, 90] },
  ],
};