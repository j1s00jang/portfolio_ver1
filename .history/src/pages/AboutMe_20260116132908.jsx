import Breadcrumbs from '../components/Breadcrumbs'
import './AboutMe.css'

function AboutMe() {
  const breadcrumbItems = [
    { label: 'Home', link: '/home' },
    { label: 'About me', link: '/about-me' }
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="about-me-content">
        <h1>Hello, I am Jisoo!</h1>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>
      </div>
    </>
  )
}

export default AboutMe

