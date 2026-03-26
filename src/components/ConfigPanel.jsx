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
    <section className="space-y-4">
      {generatedFiles.map((file) => {
        const generator = generatorMap[file.name];
        return (
          <div
            key={file.name}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-900">{file.name}</span>
              {generator && (
                <span className="text-xs text-gray-500">{generator}</span>
              )}
            </div>
            {generator ? (
              <div className="grid grid-cols-2">
                <div className="p-4 border-r border-gray-200">
                  <ConfigOptions
                    generator={generator}
                    options={configOptions[generator]}
                    onUpdate={onUpdateOption}
                  />
                </div>
                <div className="p-4 bg-gray-50">
                  <CodePreview content={file.content} />
                </div>
              </div>
            ) : (
              <div className="p-4 bg-gray-50">
                <CodePreview content={file.content} />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default ConfigPanel;