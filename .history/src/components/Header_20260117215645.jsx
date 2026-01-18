import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img 
            src="/jisoo_logo.svg" 
            alt="Jisoo's personal logo" 
            className="jisoo-logo"
          />
          <Link to="/" className="logo-link"></Link>
        </div>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">home</Link>
          <Link to="/projects" className="nav-link">projects</Link>
          <Link to="/about-me" className="nav-link">about me</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
