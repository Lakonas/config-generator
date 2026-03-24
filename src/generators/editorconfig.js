export function generateEditorconfig(options, prettierOptions) {
  const indentStyle = prettierOptions
    ? (prettierOptions.tabs ? 'tab' : 'space')
    : (options.indentStyle || 'space');

  const indentSize = prettierOptions
    ? prettierOptions.indentWidth
    : (options.indentSize || 2);

  const lines = [
    'root = true',
    '',
    '[*]',
    `indent_style = ${indentStyle}`,
    `indent_size = ${indentSize}`,
    `end_of_line = lf`,
    `charset = utf-8`,
    `trim_trailing_whitespace = ${options.trimWhitespace !== false ? 'true' : 'false'}`,
    `insert_final_newline = ${options.finalNewline !== false ? 'true' : 'false'}`,
  ];

  return lines.join('\n');
}