import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
import { Helmet } from "react-helmet"


export const query = graphql`
  {
    allContentfulProjects(sort: {updatedAt: DESC}, filter: {isFeatured: {eq: true}}) {
      nodes {
        id
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        github
        link
        featuredImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        techStack
      }
    }	

    allContentfulBlogs(sort: {createdAt: DESC}, limit: 3) {
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

export default ({ data }) => {
  const {
    allContentfulProjects: { nodes: projects },
    allContentfulBlogs: { nodes: blogs },
  } = data


  return (
    <Layout>
      <SEO title="Mobile & Game Developer" description="Got an amazing app idea you want to turn into reality? Let’s discuss it." />
      <Helmet>
      <meta name="google-site-verification" content="VD829fSaMuDA9tG2uzLEpEZ2q5t4uKaClFkKKuBZr_0" />
      </Helmet>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="latest articles" showLink />
    </Layout>
  )
}

