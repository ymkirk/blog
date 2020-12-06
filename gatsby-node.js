/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { Component } = require("react")

exports.creatPages = ({graphql,actions}) => {
    const { createPage } = actions
    const blogPost = path.resolve(`src/templates/blog-post.js`)

    return graphql(`
        {
            allContentfulBlog(sort: {fields: publishedDate, order: DESC}) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `).then((result) => {
        result.data.allContentfulBlog.edges.forEach((item) => {
            createPage({
                path: `/blog/${item.node.slug}`,
                Component: blogPost,
                context: {
                    slug: item.node.slug
                }
            })
        })
    })
}