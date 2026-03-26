function CodePreview({ content }) {
  return (
    <pre className="text-xs font-mono text-gray-800 whitespace-pre-wrap leading-relaxed">
      <code>{content}</code>
    </pre>
  );
}

export default CodePreview;