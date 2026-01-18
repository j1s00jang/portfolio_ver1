import Breadcrumbs from '../components/Breadcrumbs'

function AboutMe() {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'About me', link: null }
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="about-me-content">
        {/* About Me content will go here */}
      </div>
    </>
  )
}

export default AboutMe

