import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'

export default function Template({data}) {
    const {markdownRemark: post} = data;
    return (
        <div>
            <Header></Header>
            <div className="blogpost">
            <h1>
                {post.frontmatter.title}
            </h1>
            <h2>
                {post.frontmatter.subtitle}
            </h2>
            <div dangerouslySetInnerHTML={{__html: post.html}}/>
        </div>
        </div> 
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path}}) {
            html
            frontmatter {
                path
                title
                subtitle
                date
            }
        }
    }
`