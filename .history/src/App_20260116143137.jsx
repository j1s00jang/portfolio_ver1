import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
