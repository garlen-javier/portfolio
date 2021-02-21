import React from "react"
import Layout from "../components/Layout"
import { graphql,Link } from "gatsby"
import SEO from "../components/SEO"
import Img from "gatsby-image"

export const query = graphql`
  query {
    notFound: file(relativePath: { eq: "not_found.png" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Error = ({data}) => {
  return (
    <Layout>
      <SEO title="Not Found" image={data.notFound.publicURL.replace('/portfolio','')}/>
      <main className="error-page">
        <div className="error-container">
        <Img
            fluid={data.notFound.childImageSharp.fluid}
            alt="not found"
            objectFit="cover"
            objectPosition="50% 50%"
          />
          <h3>oops it's a dead end</h3>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
