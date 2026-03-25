export const stackItems = [
  // Frameworks
  { id: 'react', name: 'React', category: 'Frameworks', dependencies: [] },
  { id: 'nextjs', name: 'Next.js', category: 'Frameworks', dependencies: ['react', 'nodejs'] },
  { id: 'express', name: 'Express', category: 'Frameworks', dependencies: ['nodejs'] },
  { id: 'nodejs', name: 'Node.js', category: 'Frameworks', dependencies: [] },

  // Languages
  { id: 'javascript', name: 'JavaScript', category: 'Languages', dependencies: [] },
  { id: 'typescript', name: 'TypeScript', category: 'Languages', dependencies: [] },

  // Tools
  { id: 'eslint', name: 'ESLint', category: 'Tools', dependencies: [] },
  { id: 'prettier', name: 'Prettier', category: 'Tools', dependencies: [] },
  { id: 'docker', name: 'Docker', category: 'Tools', dependencies: [] },
  { id: 'editorconfig', name: 'EditorConfig', category: 'Tools', dependencies: [] },

  // Testing
  { id: 'jest', name: 'Jest', category: 'Testing', dependencies: [] },
  { id: 'playwright', name: 'Playwright', category: 'Testing', dependencies: [] },
];

export const categories = ['Frameworks', 'Languages', 'Tools', 'Testing'];