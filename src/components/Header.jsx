function Header({ onDownload, canDownload }) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Config Generator</h1>
          <p className="text-sm text-gray-500">Zero-conflict project configs in 30 seconds</p>
        </div>
        <button
          onClick={onDownload}
          disabled={!canDownload}
          className={`px-5 py-2 rounded-lg text-sm font-medium text-white transition-colors ${
            canDownload
              ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Download Config Bundle
        </button>
      </div>
    </header>
  );
}

export default Header;