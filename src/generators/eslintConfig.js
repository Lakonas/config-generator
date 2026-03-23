

export function generateEslint(options, stack){
  const imports = ['import js from "@eslint/js";'];
  const configs = ['js.configs.recommended'];

  if (stack.includes('typescript')) {
    imports.push('import tseslint from "typescript-eslint";');
    configs.push('...tseslint.configs.recommended');

  }

  if(stack.includes('react')) {
    imports.push('import react from "eslint-plugin-react";');
    configs.push('react.configs.flat.recommended');
  }

  if(stack.includes('prettier')) {
    imports.push('import prettier from "eslint-config-prettier";');
    configs.push('prettier');

  }

  const rules = {};

  if (options.strict) {
    rules['no-unused-vars'] = 'error';
    rules['no-console'] = 'warn';
  }

  const rulesBlock = Object.keys(rules).length > 0
    ? `\n  rules: ${JSON.stringify(rules, null, 4).replace(/\n/g, '\n  ')},`
    : '';

  return `${imports.join('\n')}

export default [
  ${configs.join(',\n  ')},
  {
    files: ["**/*.{js,jsx${stack.includes('typescript') ? ',ts,tsx' : ''}}"],${rulesBlock}
  },
];
`;
}