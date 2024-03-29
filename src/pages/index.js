import React from 'react'
import Helmet from 'react-helmet'
import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'GetFlix',
    description: 'A movie rental website built in REACT.js. External APIs used: TMDB & Stripe API',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Automated diagnosis model using transfer learning',
    description:
      'Transfer Learning to distinguish between Pneumonia and Normal X-Rays',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'The Galaxy Times',
    description: 'React application pulling data from various NASA APIs',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Smart Sensor Glasses with Cane',
    description:
      'Raspberry Pi based device designed to assist the visually impaired',
  },
]

const HomeIndex = () => {
  const siteTitle = 'Saniya Nafees | Software Developer'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Hi there, I'm Saniya!</h2>
          </header>
          <p>
            I'm a software developer based in Colorado specializing in building
            user friendly applications and websites. Shortly after graduating{' '}
            <a href="https://www.njit.edu/">
              New Jersey Institute of Technology
            </a>{' '}
            I joined <a href="https://www.clarksusa.com">Clarks</a>, where I
            worked as a Front End Developer and got the opportunity to work on
            interesting and meaningful projects on a daily basis.
          </p>
          <p>Here's some of the technologies I enjoy working with:</p>
          <ul className="skills">
            <li>JavaScript</li>
            <li>React</li>
            <li>jQuery</li>
            <li>HTML & CSS/Sass</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Firebase</li>
            <li>Git</li>
            <li>Markdown</li>
          </ul>
          <ul className="actions">
            <li>
              <a href="mailto:saniyanafees6@gmail.com" className="button">
                Get In Touch
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Work Experience</h2>
          <div className="jobs">
            <div id="job1" className="job">
              <h3>
                <span className="jobtitle">Jr. Front End Developer</span>
                <span className="companyname">
                  <span>&nbsp;@&nbsp;</span>
                  <a href="https://www.clarksusa.com/" target="_blank">
                    Clarks
                  </a>
                </span>
              </h3>
              <h4 class="jobduration">
                <span>January 2019 - April 2020</span>
              </h4>
              <div>
                <ul>
                  <li>
                    Managed and updated front end of Clarks USA eCommerce
                    website
                  </li>
                  <li>
                    Created new features functionality and capabilities on the
                    site using jQuery, HTML and CSS
                  </li>
                  <li>
                    Supported Email Marketing coding requirements on Salesforce
                    Marketing Cloud platform
                  </li>
                  <li>
                    Ran A/B tests and analyze consumer behavior using Monetate
                    platform.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="three">
          <h2>Recent Work</h2>

          <Gallery
            images={DEFAULT_IMAGES.map(
              ({ id, source, thumbnail, caption, description }) => ({
                source,
                thumbnail,
                caption,
                description,
              })
            )}
          />

          <ul className="actions">
            <li>
              <a href="https://github.com/saniyanafees6/" className="button">
                See More On Github
              </a>
            </li>
          </ul>
        </section>

        <section id="four">
          <h2>Get In Touch</h2>
          <p>
            Have a question or want to work together? My inbox is alway open,
            send me a message I'll do my best to get back to you!
          </p>
          <ul className="actions">
            <li>
              <a href="mailto:saniyanafees6@gmail.com" className="button">
                Say Hello!
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
