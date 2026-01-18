import Breadcrumbs from '../components/Breadcrumbs'

function Projects() {
  const breadcrumbItems = [
    { label: 'Home', link: '' },
    { label: 'Projects', link: null }
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="projects-content">
        {/* Projects content will go here */}
      </div>
    </>
  )
}

export default Projects

