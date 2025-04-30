import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = ({
  data: {
    allContentfulBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBlogs(sort: {createdAt: DESC}) {
        nodes {
        id
        title
        url
        excerpt
        tags
        featuredImage {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        }
    }
  }
`
export default Blog
