import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from "../components/SEO"
import MDEditor from "@uiw/react-md-editor"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { description, techStack, profilePic} = nodes[0]
  return (
    <Layout>
      <SEO title="About Me" description="Mobile & Game Developer" image={profilePic.publicUrl.replace('/portfolio','')} />
      <section className="about-page">
        <div className="section-center about-center">
          <GatsbyImage image={profilePic.gatsbyImageData} className="about-img" />
          <article className="about-text">
            <Title title="About Me" />
            <MDEditor.Markdown source={description.childMarkdownRemark.html} className="markdown" style={{ backgroundColor: "transparent" }} />
            <div className="about-stack">
              {techStack.map((item, index) => {
                return <span key={index}>{item}</span>
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
    about: allContentfulAbout {
        nodes {
            firstName
            lastName
            jobTitle
            description {
                childMarkdownRemark {
                html
                }
            }
            techStack
            profilePic {
                publicUrl
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
        }
    }
  }
`

export default About
