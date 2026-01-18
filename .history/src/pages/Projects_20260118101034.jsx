import { useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import './Projects.css'

function Projects() {
  const [activeTab, setActiveTab] = useState('all')
  
  const breadcrumbItems = [
    { label: 'Home', link: '/home' },
    { label: 'Projects', link: '/projects' }
  ]

  const folderImages = {
    'all': '/src/assets/projects/project_all_folder.svg',
    'ui/ux': '/src/assets/projects/new_uiux.svg',
    'graphic design': '/src/assets/projects/project_graphic_folder.svg',
    'development': '/src/assets/projects/project_dev_folder.svg'
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="projects-content">
        <div className="projects-content-all">
          <div className="projects-folder-container">
            <img 
              src={folderImages[activeTab]} 
              alt={`${activeTab} projects folder`} 
              className="projects-folder-image"
            />
            <div className="projects-tabs">
              <button 
                className={`project-tab project-tab-all ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => handleTabClick('all')}
              >
                all
              </button>
              <button 
                className={`project-tab project-tab-uiux ${activeTab === 'ui/ux' ? 'active' : ''}`}
                onClick={() => handleTabClick('ui/ux')}
              >
                ui/ux
              </button>
              <button 
                className={`project-tab project-tab-graphic ${activeTab === 'graphic design' ? 'active' : ''}`}
                onClick={() => handleTabClick('graphic design')}
              >
                graphic design
              </button>
              <button 
                className={`project-tab project-tab-dev ${activeTab === 'development' ? 'active' : ''}`}
                onClick={() => handleTabClick('development')}
              >
                development
              </button>
            </div>
          </div>
          <div className="projects-content-scaffold">
            <div className="projects-content-scaffold-left">

            </div>
            <div className="projects-content-scaffold-right">
              
            </div>
          </div>
          <div className="projects-content-montro"></div>
          <div className="projects-content-canDesign"></div>
          <div className="projects-content-planit"></div>
        </div>
      </div>
    </>
  )
}

export default Projects

