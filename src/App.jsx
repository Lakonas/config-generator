import { useState } from 'react';
import { stackItems } from './data/stacks';
import { defaultOptions } from './data/defaults';
import { generatePrettier } from './generators/prettier';
import { generateEslint } from './generators/eslintConfig';
import { generateTypescript } from './generators/typescript';
import { generateGitignore } from './generators/gitignore';
import { generateEditorconfig } from './generators/editorconfig';
import { generateEnv } from './generators/env';
import { generateDocker, generateDockerignore } from './generators/docker';
import { generateJest } from './generators/jest';

function App() {
  const [selectedStack, setSelectedStack] = useState([]);
  const [configOptions, setConfigOptions] = useState(defaultOptions);

  const toggleStack = (id) => {
    setSelectedStack((prev) => {
      const item = stackItems.find((s) => s.id === id);
      if (prev.includes(id)) {
        return prev.filter((s) => s !== id);
      } else {
        const next = [...prev, id];
        item.dependencies.forEach((dep) => {
          if (!next.includes(dep)) {
            next.push(dep);
          }
        });
        return next;
      }
    });
  };

  const updateOption = (generator, key, value) => {
    setConfigOptions((prev) => ({
      ...prev,
      [generator]: {
        ...prev[generator],
        [key]: value,
      },
    }));
  };
  const generatedFiles = [];

  if (selectedStack.includes('prettier')) {
    generatedFiles.push({ name: '.prettierrc', content: generatePrettier(configOptions.prettier) });
  }
  if (selectedStack.includes('eslint')) {
    generatedFiles.push({ name: 'eslint.config.js', content: generateEslint(configOptions.eslint, selectedStack) });
  }
  if (selectedStack.includes('typescript')) {
    generatedFiles.push({ name: 'tsconfig.json', content: generateTypescript(configOptions.typescript, selectedStack) });
  }
  if (selectedStack.includes('editorconfig')) {
    const prettierOpts = selectedStack.includes('prettier') ? configOptions.prettier : null;
    generatedFiles.push({ name: '.editorconfig', content: generateEditorconfig(configOptions.editorconfig, prettierOpts) });
  }
  if (selectedStack.includes('docker')) {
    generatedFiles.push({ name: 'Dockerfile', content: generateDocker(configOptions.docker, selectedStack) });
    generatedFiles.push({ name: '.dockerignore', content: generateDockerignore(selectedStack) });
  }
  if (selectedStack.includes('jest')) {
    generatedFiles.push({ name: 'jest.config.js', content: generateJest(configOptions.jest, selectedStack) });
  }

  generatedFiles.push({ name: '.gitignore', content: generateGitignore(selectedStack) });
  generatedFiles.push({ name: '.env.example', content: generateEnv(selectedStack) });
  return (
    <div>
      <h1>Config Generator</h1>
      <p>Selected: {selectedStack.join(', ') || 'none'}</p>
      <div>
        {stackItems.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleStack(item.id)}
            style={{
              margin: '4px',
              padding: '8px',
              background: selectedStack.includes(item.id) ? '#2563eb' : '#e5e7eb',
              color: selectedStack.includes(item.id) ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div>
        {generatedFiles.map((file) => (
          <div key={file.name} style={{ marginTop: '16px' }}>
            <h3>{file.name}</h3>
            <pre style={{ background: '#f3f4f6', padding: '12px', borderRadius: '4px', overflow: 'auto' }}>
              {file.content}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;