import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"


export const query = graphql`
  {
    allStrapiProjects(sort: { fields: updated_at, order: DESC }, filter: {isFeatured: {eq: true}}) {
      nodes {
        id
        title
        description
        github
        link
        featured_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tech_stack {
          id
          value
        }
      }
    }

    allStrapiBlogs(sort: { fields: created_at, order: DESC }, limit: 3)  {
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


export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO title="Full Stack Mobile Developer" description="Got an amazing app idea you want to turn into reality? Let’s discuss it." />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="latest articles" showLink />
    </Layout>
  )
}

