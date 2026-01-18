import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img 
            src="/jisoo_logo.svg" 
            alt="Jisoo Logo" 
            className="logo"
          />
        </div>
        <nav className="nav-menu">
          <a href="#home" className="nav-link">home</a>
          <a href="#projects" className="nav-link">projects</a>
          <a href="#about-me" className="nav-link">about me</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
