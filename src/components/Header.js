import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/logo.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Saniya Nafees</strong>
        <br />
        Software Developer
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
