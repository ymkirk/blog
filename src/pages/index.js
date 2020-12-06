import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src="https://source.unsplash.com/random/1200x300" alt='randomImage'/>
    <h1>Welcome To THE BLOG!</h1>
    <p>It's not a regular blog... It's this person's Blog, Where you probably won't find out much, but that's ok. I will be filling these posts with some
      interesting information. A little about me.. Alot about some random facts. Click below to get the THE BLOG. 
    </p>
    <br></br>
    <Link to="/blog/">To THE BLOG!</Link>
  </Layout>
)

export default IndexPage