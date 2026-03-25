function Header({ onDownload, canDownload }) {
  return (
    <header>
      <h1>Config Generator</h1>
      <p>Zero-conflict project configs in 30 seconds</p>
      <button
        onClick={onDownload}
        disabled={!canDownload}
      >
        Download Config Bundle
      </button>
    </header>
  );
}

export default Header;