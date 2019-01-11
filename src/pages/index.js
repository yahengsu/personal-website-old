import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'

const IndexPage = () => (
  <Layout>
    <div className="main">
      <p className="heading">Hi, I'm YaHeng.</p>
      <p className="subHeading">Milk tea addict, food lover, aspiring software engineer.</p>
      <p className="description">I'm a 2nd year Computer Engineering student at the <a href="https://uwaterloo.ca/" rel="noopener noreferrer" target="_blank">University of Waterloo</a> with a passion for software development.
        Previously I intered <a href="https://www.tdlab.io/" rel="noopener noreferrer" target="_blank">@TD Innovation Lab</a>, where I developed iOS solutions in Swift.
        Currently I'm interning <a href="https://securekey.com/" rel="noopener noreferrer" target="_blank">@SecureKey</a>, exploring how to make cybersecurity more user-friendly!</p>
      <p className="final">I'm always looking for new opportunities to grow and make new connections. Want to get in touch? Feel free to <Link to="/contact">contact me</Link>, I'd love to chat!</p>
    </div>
  </Layout>
)

export default IndexPage
