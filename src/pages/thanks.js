import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import Img from "gatsby-image"

export const query = graphql`
  query {
    gotMessage: file(relativePath: { eq: "message_sent.png" }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Thanks = ({ data }) => {
  return (
    <Layout>
      <SEO title="Thank you" image={data.gotMessage.publicURL.replace('/portfolio','')} />
      <main className="error-page">
        <div className="error-container">
          <Img
            fluid={data.gotMessage.childImageSharp.fluid}
            alt="message sent"
            objectFit="cover"
            objectPosition="50% 50%"
          />
          <h2>Got your message</h2>
          <p>Thank you for getting in touch. I will get back to you shortly.</p>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Thanks
