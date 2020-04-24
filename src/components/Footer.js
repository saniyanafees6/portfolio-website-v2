import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/saniya-nafees/"
            className="icon fa-linkedin"
          >
            <span className="label">Linked In</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/saniyanafees6/"
            target="_blank"
            className="icon fa-github"
          >
            <span className="label">Github</span>
          </a>
        </li>

        <li>
          <a
            href="mailto: saniyanafees6@gmail.com"
            target="_top"
            className="icon fa-envelope-o"
          >
            <span className="label">Email</span>
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1EjU12GEd35rU9dGP0OnXYQbvRcV38W1oB4p8-3C8ntc/edit?usp=sharing"
            target="_blank"
            className="icon fa-file-o"
          >
            <span className="label">Resume</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
