const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <span className="brand-logo">R</span>
          <div className="brand-text">
            <span className="brand-title">React Task 1</span>
            <span className="brand-sub">Basics • Props • Cards</span>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-chip">Home</button>
          <button className="nav-chip">Cards</button>
          <button className="nav-chip">About</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
