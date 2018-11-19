import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'

const BlogPage = ({data}) => (
    <Layout>
        <div className="blog-page">
        <ul>
            {data.allMarkdownRemark.edges.map(post => (
                <li className="post">
                    <h2><Link to={post.node.frontmatter.path} key={post.node.id}>{post.node.frontmatter.title}</Link></h2>
                    <p className="post-date">{post.node.frontmatter.date}</p>
                </li>
            ))}
        </ul>
        </div>
    </Layout>
)

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(limit: 5) {
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