export function generateDocker(options, stack) {
  const nodeVersion = options.nodeVersion || '20';
  const lines = [];

  if (options.multiStage) {
    lines.push(
      `FROM node:${nodeVersion}-alpine AS base`,
      'WORKDIR /app',
      'COPY package*.json ./',
      '',
      '# Dependencies stage',
      'FROM base AS deps',
      'RUN npm ci',
      '',
      '# Build stage',
      'FROM base AS build',
      'COPY --from=deps /app/node_modules ./node_modules',
      'COPY . .',
      'RUN npm run build',
      '',
      '# Production stage',
      'FROM base AS production',
      'COPY --from=deps /app/node_modules ./node_modules',
      'COPY --from=build /app/dist ./dist',
    );

    if (stack.includes('nextjs')) {
      lines.splice(-1, 1, 'COPY --from=build /app/.next ./.next');
    }

    lines.push('', `EXPOSE ${options.port || 3000}`);
    lines.push(`CMD ["node", "dist/index.js"]`);
  } else {
    lines.push(
      `FROM node:${nodeVersion}-alpine`,
      'WORKDIR /app',
      'COPY package*.json ./',
      'RUN npm ci',
      'COPY . .',
    );

    if (options.target === 'production') {
      lines.push('RUN npm run build');
    }

    lines.push('', `EXPOSE ${options.port || 3000}`);

    if (options.target === 'production') {
      lines.push('CMD ["node", "dist/index.js"]');
    } else {
      lines.push('CMD ["npm", "run", "dev"]');
    }
  }

  return lines.join('\n');
}

export function generateDockerignore(stack) {
  const lines = [
    'node_modules',
    'npm-debug.log',
    '.env',
    '.env.*',
    '.git',
    '.gitignore',
    'README.md',
  ];

  if (stack.includes('nextjs')) {
    lines.push('.next');
  }

  if (stack.includes('jest') || stack.includes('playwright')) {
    lines.push('coverage');
  }

  lines.push('dist');

  return lines.join('\n');
}