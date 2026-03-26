function FolderTree({ generatedFiles }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mt-4">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <span className="text-sm font-medium text-gray-900">Project structure</span>
      </div>
      <div className="p-4 font-mono text-sm text-gray-700">
        <p className="font-medium text-gray-900">my-project/</p>
        {generatedFiles.map((file, index) => (
          <p key={file.name} className="ml-4">
            {index === generatedFiles.length - 1 ? '└── ' : '├── '}
            {file.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default FolderTree;