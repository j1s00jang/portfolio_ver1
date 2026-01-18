import './Home.css'

function Home() {
  return (
    <div className="home-content">
      <img src="/src/assets/main/jisoos.png" alt="Jisoo's" className="main_jisoo" />
      <img src="/src/assets/main/portfolio.png" alt="Portfolio" className="main_portfolio" />
      <img 
        src="/src/assets/main/folder_image.png" 
        alt="Folder" 
        className="home-folder-image"
      />
    </div>
  )
}

export default Home

