import Breadcrumbs from '../components/Breadcrumbs'
import './Projects.css'

function Projects() {
  const breadcrumbItems = [
    { label: 'Home', link: '/home' },
    { label: 'Projects', link: '/projects' }
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="projects-content">
        <div className="projects-content-all">
          <img 
            src="/src/assets/projects/project_all_folder.svg" 
            alt="All projects folder" 
            className="projects-folder-image"
          />
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

