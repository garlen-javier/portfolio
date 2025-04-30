import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

export const query = graphql`
  {
    allContentfulAbout {
      nodes {
        firstName
        jobTitle
        resume {
          url
        }
        profilePic {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(query)
  const {
    allContentfulAbout: { nodes },
  } = data
  const {firstName,jobTitle,profilePic,resume} = nodes[0]

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>{"Hi!  i'm " + firstName}</h1>
            <h4>{jobTitle}</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <a href={resume.url} download="garlen-javier" rel="noreferrer noopener" className="btn">
              Download CV
            </a>
            <SocialLinks />
          </div>
        </article>
        <GatsbyImage image={profilePic.gatsbyImageData} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
