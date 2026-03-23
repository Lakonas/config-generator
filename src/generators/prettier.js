export function generatePrettier(options){
  const config = {
    semi: options.semicolons,
    singleQuote: options.quotes === 'single',
    tabWidth: options.indentWidth,
    useTabs: options.tabs,
    trailingComma: options.trailingComma,
    printWidth: options.printWidth,
  };
  return JSON.stringify(config, null, 2)
}