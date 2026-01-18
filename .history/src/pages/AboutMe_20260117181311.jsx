import Breadcrumbs from '../components/Breadcrumbs'
import EmailIcon from '../components/EmailIcon'
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
                src="/src/assets/images/memoji_jisoo.png" 
                alt="Jisoo's memoji" 
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
                <img 
                  src="/src/assets/images/toast.jpg" 
                  alt="My cat Toast" 
                  className="toast-photo"
                  data-tooltip="My cat Toast (1 year old)"
                />
              </div>
              <div className="ilove-right">
                <p className="ilove-list">
                  my cat(Toast, 1y), coffee, food, dessert, home baking,
                  baking, cafe, crochet, hand embroidery,
                  nature, sky, cloud and all cute designed packages!
                </p>
                <div className="ilove-small-images">
                  <img 
                    src="/src/assets/images/coffee.jpg" 
                    alt="Coffee" 
                    className="coffee-photo"
                    data-tooltip="My favorite coffee"
                  />
                  <img 
                    src="/src/assets/images/pudding.jpg" 
                    alt="Pudding I made" 
                    className="baking-photo"
                    data-tooltip="Homemade pudding"
                  />
                  <img 
                    src="/src/assets/images/traders_joes.jpg" 
                    alt="Traders Joe's packages" 
                    className="packages-photo"
                    data-tooltip="Cute package designs"
                  />
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
                />
                <span className="skills-title-text">i can do</span>
              </h2>
            </div>
            <div className="skills-body">
              <div className="hard-skills">
                <h3 className="skills-section-title">hard skills /</h3>
                <div className="skills-list-container">
                  <p className="skills-list">
                    adobe creative cloud (photoshop, illustrator, indesign, after effect), figma, framer, blender(3d), html5, css, javascript, react.js, next.js, node.js, express, expo, wordpress, google analytics, content marketing, seo, web security basics
                  </p>
                  <p className="skills-list">
                    prototyping, wireframing, design & colour system, responsive ui design, interaction design, usability testing, accessibility (wcag), packaging design, typography
                  </p>
                </div>
              </div>
              <div className="soft-skills">
                <h3 className="skills-section-title">soft skills /</h3>
                <div className="skills-list-container">
                  <p className="skills-list">
                    time management, clear communicator, cross-function collaborator, conflict resolution, detail-oriented, strong prioritization, bilingual (english/korean)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-me-contact">
          <div className="contact-content">
            <div className="contact-header">
              <h2 className="contact-title">
                <img 
                  src="/src/assets/images/purple_highlight.png" 
                  alt="" 
                  className="contact-purple-highlight"
                />
                <span className="contact-title-text">get in touch</span>
              </h2>
            </div>
            <div className="contact-buttons">
              <a 
                href="mailto:jisoo.design@icloud.com" 
                className="contact-btn email-btn"
                aria-label="Send email"
              >
                <EmailIcon className="contact-icon" />
                <span className="contact-btn-text">email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/your-profile" 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn linkedin-btn"
                aria-label="Visit LinkedIn profile"
              >
                <svg 
                  className="contact-icon" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  stroke="none"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="contact-btn-text">linkedin</span>
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn resume-btn"
                aria-label="View resume"
              >
                <svg 
                  className="contact-icon" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span className="contact-btn-text">resume</span>
              </a>
              <a 
                href="https://www.instagram.com/your-profile" 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn instagram-btn"
                aria-label="Visit Instagram profile"
              >
                <svg 
                  className="contact-icon" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="contact-btn-text">ig</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AboutMe

