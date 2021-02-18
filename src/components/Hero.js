import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        first_name
        job_title
        profile_pic {
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

const Hero = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiAbout: { nodes },
  } = data
  const { first_name,job_title,profile_pic} = nodes[0]

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>{"Hi!  i'm " + first_name}</h1>
            <h4>{job_title}</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={profile_pic.childImageSharp.fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
