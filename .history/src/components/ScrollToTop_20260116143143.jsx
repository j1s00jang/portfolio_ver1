import './ScrollToTop.css'

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button 
      className="scroll-to-top-btn" 
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg 
        className="scroll-arrow-icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
      <span className="scroll-text">top</span>
    </button>
  )
}

export default ScrollToTop
