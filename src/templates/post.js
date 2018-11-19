import React from 'react'
import Header from '../components/header'
import { graphql } from 'gatsby';

export default function Template({data}) {
    const {markdownRemark: post} = data;
    return (
        <div>
            <Header></Header>
            <div className="blogpost">
                <h1>
                    {post.frontmatter.title}
                </h1>
                <h5>
                    {post.frontmatter.date}
                </h5>
                <div className="main-post" dangerouslySetInnerHTML={{__html: post.html}}/>
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