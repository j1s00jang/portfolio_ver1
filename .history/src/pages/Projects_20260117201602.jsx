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
        <h1>Projects</h1>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>
        <img src="src/assets/about_me_images/scaffold_logo_notitle.png" alt="Scaffold Logo" width="100px" height="100px"/>
        <img src="src/assets/about_me_images/01profile_screen.png" alt="Profile Screen" width="400px"/>
      </div>
    </>
  )
}

export default Projects

