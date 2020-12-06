import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulBlog(sort: {fields: publishedDate, order: DESC}) {
      edges {
        node {
          author
          publishedDate(fromNow: true)
          slug
          title
        }
      }
    }
  }
`)
  return (
    <Layout>
      <SEO title="Blog" />
      <img src="https://source.unsplash.com/random/1200x300" alt='randomImage'/>
        <h1> THE BLOG</h1>
        <div>
          {
            data.allContentfulBlog.edges.map((post,i) => {
              return (
                <div key={i}>
                  <h2>{post.node.title}</h2>
                    <p style={{fontWeight: 200, fontSize: "0.8rem"}}>Published {post.node.publishedDate}</p>
                    <p style={{fontWeight: 300, fontSize: "0.9rem"}}>Written By {post.node.auther}</p>
                    <Link to={`/blog/${post.node.slug}`}>Read More...</Link>
                    <hr style={{height: "3px"}}/>
                </div>
              )
            })
          }
        </div>
    </Layout>
  )
}
export default Blog