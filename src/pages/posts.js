import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Posts = () => {
  return (
    <Layout>
      <SEO title="Blog Posts" />
      <img src="https://source.unsplash.com/random/600x300" alt='randomImage'/>
      <h1>All of the posts are here</h1>
      <p>Here are the blog posts, I wonder what they'll be about?</p>
      <p>Lorem ipsum</p>
      <br></br>
      <Link to="/blog">Go Back</Link>
      <br></br>
      <Link to="/">Go back to the homepage</Link>
      
    </Layout>
  )
}
export default Posts