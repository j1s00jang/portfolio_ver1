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

  const projects = [
    { id: 1, name: 'Scaffold', category: 'ui/ux' },
    { id: 2, name: 'Montro', category: 'ui/ux' },
    { id: 3, name: 'Can Design', category: 'graphic design' },
    { id: 4, name: 'Plan-it', category: 'development' },
    { id: 5, name: 'Project 5', category: 'ui/ux' },
    { id: 6, name: 'Project 6', category: 'graphic design' }
  ]

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const getActiveClass = () => {
    return activeTab.replace(/\s+/g, '-').replace(/\//g, '-')
  }

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab)

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
              className={`project-tab-clickable project-tab-all-click active-${getActiveClass()}`}
              onClick={() => handleTabClick('all')}
              aria-label="Show all projects"
            />
            <button 
              className={`project-tab-clickable project-tab-uiux-click active-${getActiveClass()}`}
              onClick={() => handleTabClick('ui/ux')}
              aria-label="Filter by UI/UX projects"
            />
            <button 
              className={`project-tab-clickable project-tab-graphic-click active-${getActiveClass()}`}
              onClick={() => handleTabClick('graphic design')}
              aria-label="Filter by Graphic Design projects"
            />
            <button 
              className={`project-tab-clickable project-tab-dev-click active-${getActiveClass()}`}
              onClick={() => handleTabClick('development')}
              aria-label="Filter by Development projects"
            />
          </div>
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="project-card"
                data-category={project.category}
              >
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects

