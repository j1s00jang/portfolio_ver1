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
    'all': '/src/assets/projects/projects_all_folder.svg',
    'ui/ux': '/src/assets/projects/projects_uiux_folder.svg',
    'graphic design': '/src/assets/projects/projects_graphic_folder.svg',
    'development': '/src/assets/projects/projects_dev_folder.svg'
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
            <button 
              className={`project-tab-clickable project-tab-all-click active-${activeTab}`}
              onClick={() => handleTabClick('all')}
              aria-label="Show all projects"
            />
            <button 
              className={`project-tab-clickable project-tab-uiux-click active-${activeTab}`}
              onClick={() => handleTabClick('ui/ux')}
              aria-label="Filter by UI/UX projects"
            />
            <button 
              className={`project-tab-clickable project-tab-graphic-click active-${activeTab}`}
              onClick={() => handleTabClick('graphic design')}
              aria-label="Filter by Graphic Design projects"
            />
            <button 
              className={`project-tab-clickable project-tab-dev-click active-${activeTab}`}
              onClick={() => handleTabClick('development')}
              aria-label="Filter by Development projects"
            />
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

