import React from 'react'
import Layout from '../components/layout'


const BlogPage = () => (
    <Layout>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
    </Layout>
)

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(limit: 10) {
            edges {
                node {
                    frontmatter {
                        path
                        title
                        subtitle
                        date
                    }
                }
            }
        }
    }
`
export default BlogPage