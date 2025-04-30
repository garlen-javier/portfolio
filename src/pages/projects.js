import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data: {
    allContentfulProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProjects(sort: {createdAt: DESC}) {
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
  }
`

export default ProjectsPage
