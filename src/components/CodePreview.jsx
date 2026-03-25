function CodePreview({ fileName, content }) {
  return (
    <div>
      <h3>{fileName}</h3>
      <pre>
        <code>{content}</code>
      </pre>
    </div>
  );
}

export default CodePreview;