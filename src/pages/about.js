import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
import MDEditor from "@uiw/react-md-editor"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { description, tech_stack, profile_pic } = nodes[0]

  return (
    <Layout>
      <SEO title="About Me" description="Mobile & Game Developer" image={profile_pic.publicURL.replace('/portfolio','')} />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={profile_pic.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title="About Me" />
            <MDEditor.Markdown source={description} className="markdown" />
            <div className="about-stack">
              {tech_stack.map(item => {
                return <span key={item.id}>{item.value}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        first_name
        last_name
        job_title
        description
        tech_stack {
          id
          value
        }
        profile_pic {
          publicURL
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

export default About
