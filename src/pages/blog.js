import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
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
    allStrapiBlogs(sort: { fields: created_at, order: DESC })  {
      nodes {
        id
        title
        url
        excerpt
        tags {
          id
          value
        }
        featured_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Blog
