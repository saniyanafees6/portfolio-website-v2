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
    caption: 'Dover',
    description: 'A social media app built with C#, React and SQLite3',
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
            <li>C#</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Firebase</li>
            <li>React</li>
            <li>jQuery</li>
            <li>Sass</li>
            <li>Git</li>
            <li>Markdown</li>
            <li>Assembly</li>
          </ul>
          <ul className="actions">
            <li>
              <a href="#" className="button">
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
              <a href="#" className="button">
                See More On Github
              </a>
            </li>
          </ul>
        </section>

        <section id="four">
          <h2>Get In Touch</h2>
          <p>Have a question or want to work together?</p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Colorado, United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  (864) 607-0654
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto: saniyanafees6@gmail.com" target="_top">
                    saniyanafees6@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
