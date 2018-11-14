import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className="header">
      <Link className="link home" to = "/">YaHeng Su</Link>
      <Link className="link projects" to="/page-2">Projects</Link>
      <Link className="link blog" to="/page-2">Blog</Link>
      <Link className="link contact" to="/page-2">Contact</Link>
      <Link className="link resume" to="/resume">Resume</Link>
  </div>
)

export default Header
