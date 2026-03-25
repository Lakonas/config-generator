import CodePreview from './CodePreview';

function ConfigPanel({ generatedFiles }) {
  return (
    <section>
      {generatedFiles.map((file) => (
        <CodePreview
          key={file.name}
          fileName={file.name}
          content={file.content}
        />
      ))}
    </section>
  );
}

export default ConfigPanel;