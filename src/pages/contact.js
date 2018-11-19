import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'

const ContactPage = () => (
    <Layout>
        <div className="contact-page">
        <h1>Contact Me!</h1>
            <p>Feel free to connect with me on  <a href="https://www.linkedin.com/in/yahengsu/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
            , or shoot me an e-mail at <a href="mailto:yaheng.su@uwaterloo.ca" rel="noopener noreferrer" target="_blank">yaheng.su@uwaterloo.ca</a>.
            If you want to know more about my recent projects and development history, you can take a look at my 
            <a href="https://github.com/yahengsu/" rel="noopener noreferrer" target="_blank"> Github</a> profile
            or my <Link to="/resume.pdf">resume</Link>.

            </p>
            <p>Maybe you just want to talk about my milk tea addiction, or have questions or comments about something more personal. In that case, 
                feel free to <a href="mailto:yaheng.su@uwaterloo.ca" rel="noopener noreferrer" target="_blank">e-mail</a> me or reach out to me through <a href="https://www.facebook.com/yasungsu" rel="noopener noreferrer" target="_blank">Facebook </a>
                 or <a href="https://www.instagram.com/yasung__/" rel="noopener noreferrer" target="_blank">Instagram</a>. I'd love to strike up a conversation!
            </p>
        </div>
    </Layout>
)

export default ContactPage