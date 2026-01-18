import './Home.css'

function Home() {
  return (
    <div className="home-content">
      <div className="main_content_top">
      <img src="/src/assets/main/jisoos.png" alt="Jisoo's" className="main_jisoo" />
      <img src="/src/assets/main/portfolio.png" alt="Portfolio" className="main_portfolio" />
      </div>
      <div className="main_content_bottom">
      <img 
        src="/src/assets/main/folder_image.png" 
        alt="Folder" 
        className="home-folder-image"
      />
      </div>
    </div>
  )
}

export default Home

