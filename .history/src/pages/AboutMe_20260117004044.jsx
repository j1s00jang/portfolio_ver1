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
        <div className="about-me-intro">
          <div className="about-me-intro-left">
            <div className="about-me-photo">
              <img 
                src="/src/assets/images/notion_graphic.png" 
                alt="Jisoo's professional photo" 
                className="profile-image"
              />
            </div>
            <div className="name-title">
              <img 
                src="/src/assets/images/purple_highlight.png" 
                alt="" 
                className="name-purple-highlight"
              />
              <h1 className="name-text">Jisoo</h1>
            </div>
            <div className="about-me-title">
              <p className="job-title">ui/ux designer</p>
              <p className="job-title">product & packaging designer</p>
            </div>
          </div>
          <div className="about-me-intro-right">
            <p className="intro-text">
              <strong>hello</strong>, i am <strong>Jisoo!</strong><br />
              <strong>a ui/ux designer, product & packaging designer</strong> focused on building <strong>intuitive</strong>, <strong>human-focused</strong> design and <strong>experiences</strong>. With a strong interest in <strong>accessibility</strong> and <strong>inclusive</strong> design, I create products that feel <strong>clear</strong>, <strong>considerate</strong>, <strong>thoughtful</strong>, and <strong>easy</strong> to use for <strong>diverse</strong> audiences.
            </p>
          </div>
        </div>
        <div className="about-me-ilove">
          <div className="ilove-content">
            <div className="ilove-header">
              <h2 className="ilove-title">
                <img 
                  src="/src/assets/images/purple_highlight.png" 
                  alt="" 
                  className="ilove-purple-highlight"
                />
                <span className="ilove-title-text">i love</span>
              </h2>
            </div>
            <div className="ilove-body">
              <div className="ilove-left">
                <div className="ilove-large-image">
                 <img src="/src/assets/images/toast.jpg" alt="My cat Toast" className="toast-photo" />
                </div>
              </div>
              <div className="ilove-right">
                <p className="ilove-list">
                  my cat(Toast, 1y), coffee, food, dessert, home baking,
                  baking, cafe, crochet, hand embroidery,
                  nature, sky, cloud and all cute designed packages!
                </p>
                <div className="ilove-small-images">
                  <div className="ilove-coffee">
                    <img src="/src/assets/images/coffee.jpg" alt="Coffee" className="coffee-photo" />
                  </div>
                  <div className="ilove-baking">
                    <img src="/src/assets/images/pudding.jpg" alt="Pudding I made" className="baking-photo" />
                  </div>
                  <div className="ilove-packages">
                    <img src="/src/assets/images/traders_joes.jpg" alt="Traders Joe's packages" className="packages-photo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-me-skills">
          <div className="skills-content">
            <div className="skills-header">
              <h2 className="skills-title">
                <img 
                  src="/src/assets/images/purple_highlight.png" 
                  alt="" 
                  className="skills-purple-highlight"
                />i can do</span>
              </h2>
            </div>
            <div className="skills-body">
              <div className="hard-skills">
                <h3 className="skills-section-title">hard skills /</h3>
                <p className="skills-list">
                  adobe creative cloud (photoshop, illustrator, indesign, after effect), figma, framer, blender(3d), html5, css, javascript, react.js, next.js, node.js, express, expo, wordpress, google analytics, content marketing, seo, web security basics, prototyping, wireframing, design & colour system, responsive ui design, interaction design, usability testing, accessibility (wcag), packaging design, typography
                </p>
              </div>
              <div className="soft-skills">
                <h3 className="skills-section-title">soft skills /</h3>
                <p className="skills-list">
                  time management, clear communicator, cross-function collaborator, conflict resolution, detail-oriented, strong prioritization, bilingual (english/korean)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-me-contact">
          
        </div>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>
        <p>I am a software engineer with a passion for building web applications. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatibus exercitationem autem hic voluptatem deleniti accusamus asperiores, quo perspiciatis ratione, ad quam excepturi rerum dignissimos voluptate quod cumque assumenda necessitatibus.</p>

      </div>
    </>
  )
}

export default AboutMe

