import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <img src="https://source.unsplash.com/random/1200x300" alt='randomImage'/>
      <h1>Hey! It's This person!</h1>
      <p>Here are the blog posts, I wonder what they'll be about?</p>
      <p>Lorem ipsum</p>
      <Link to="/posts">Read More</Link>
      <br></br>
      <Link to="/">Go back to the homepage</Link>
      
    </Layout>
  )
}
export default Blog