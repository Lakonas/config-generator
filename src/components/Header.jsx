function Header({ onDownload, canDownload }) {
  return (
    <header className="bg-gray-900 px-4 py-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Config Generator</h1>
          <p className="text-sm text-gray-400 mt-1">Zero-conflict project configs in 30 seconds</p>
        </div>
        <button
          onClick={onDownload}
          disabled={!canDownload}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
            canDownload
              ? 'bg-blue-500 hover:bg-blue-400 text-white cursor-pointer shadow-sm'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          ↓ Download Bundle
        </button>
      </div>
    </header>
  );
}

export default Header;