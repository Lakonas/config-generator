export function generateGitignore(stack) {
  const lines = [
    '# Dependencies',
    'node_modules/',
    '',
    '# Environment',
    '.env',
    '.env.*',
    '!.env.example',
    '',
    '# OS files',
    '.DS_Store',
    'Thumbs.db',
  ];

  if (stack.includes('typescript') || stack.includes('react') || stack.includes('express')) {
    lines.push('', '# Build output', 'dist/');
  }

  if (stack.includes('nextjs')) {
    lines.push('', '# Next.js', '.next/', 'out/');
  }

  if (stack.includes('jest') || stack.includes('playwright')) {
    lines.push('', '# Test coverage', 'coverage/');
  }

  if (stack.includes('docker')) {
    lines.push('', '# Docker', '.dockerignore');
  }

  lines.push('', '# Editor', '.vscode/', '.idea/', '*.swp', '*.swo');

  return lines.join('\n');
}