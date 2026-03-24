export function generateEnv(stack) {
  const lines = [
    '# Environment Variables',
    '# Copy this file to .env and fill in the values',
    '',
  ];

  if (stack.includes('express') || stack.includes('nodejs')) {
    lines.push('# Server', 'PORT=3000', '');
  }

  if (stack.includes('nextjs')) {
    lines.push('# Next.js', 'NEXT_PUBLIC_APP_URL=http://localhost:3000', '');
  }

  if (stack.includes('postgresql')) {
    lines.push('# Database', 'DATABASE_URL=postgresql://user:password@localhost:5432/dbname', '');
  }

  if (stack.includes('ai')) {
    lines.push('# AI', 'AI_API_KEY=your-api-key-here', '');
  }

  if (stack.includes('jwt')) {
    lines.push('# Authentication', 'JWT_SECRET=your-secret-here', '');
  }

  return lines.join('\n');
}