import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <div className="header">
      <ul>
        <li>
          <Link className="link home" to = "/">YaHeng Su</Link>
        </li>
        <li>
          <Link className="link projects" to="/projects">Projects</Link>
        </li>
        <li>
          <Link className="link blog" to="/blog">Blog</Link>
        </li>
        <li>
         <Link className="link contact" to="/contact">Contact</Link>
        </li>
        <li>
          <Link className="link resume" to="/resume.pdf">Resume</Link>
        </li>
      </ul>
  </div>
)

export default Header
