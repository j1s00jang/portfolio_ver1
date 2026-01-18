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
        <h1>Hello, I am Jisoo!</h1>
      </div>
    </>
  )
}

export default AboutMe

