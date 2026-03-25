import CodePreview from './CodePreview';
import ConfigOptions from './ConfigOptions';

const generatorMap = {
  '.prettierrc': 'prettier',
  'eslint.config.js': 'eslint',
  'tsconfig.json': 'typescript',
  '.editorconfig': 'editorconfig',
  'Dockerfile': 'docker',
  'jest.config.js': 'jest',
};

function ConfigPanel({ generatedFiles, configOptions, onUpdateOption }) {
  return (
    <section>
      {generatedFiles.map((file) => {
        const generator = generatorMap[file.name];
        return (
          <div key={file.name}>
            {generator && (
              <ConfigOptions
                generator={generator}
                options={configOptions[generator]}
                onUpdate={onUpdateOption}
              />
            )}
            <CodePreview
              fileName={file.name}
              content={file.content}
            />
          </div>
        );
      })}
    </section>
  );
}

export default ConfigPanel;