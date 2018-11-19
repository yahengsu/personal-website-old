import React from 'react'
import Layout from '../components/layout'


const ContactPage = () => (
    <Layout>
        <div className="contact-page">
            <h2>Professional</h2>
                <ul>
                    <li>
                        <a href="https://github.com/yahengsu/" rel="noopener noreferrer" target="_blank">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/yahengsu/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                    </li>
                    <li>
                        <a href="mailto:yaheng.su@uwaterloo.ca" rel="noopener noreferrer" target="_blank">E-Mail</a>
                    </li>
            </ul>
            <h2>Social</h2>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/yasungsu" rel="noopener noreferrer" target="_blank">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/yasung__/" rel="noopener noreferrer" target="_blank">Instagram</a>
                    </li>
                </ul>
        </div>
    </Layout>
)

export default ContactPage