function Header({ isDarkMode, toggleTheme }) {
  return (
    <header className="header-container">
      <div className="header-text">
        <h1>Interactive Profile Cards</h1>
        <p>Tugas Week 4 ISB II - React Fundamental</p>
      </div>
      
      {/* Tombol pemicu Light/Dark Mode */}
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
}

export default Header;