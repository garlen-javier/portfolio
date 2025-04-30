import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import { GatsbyImage } from "gatsby-plugin-image";

export const query = graphql`{
  gotMessage: file(relativePath: {eq: "message_sent.png"}) {
    publicURL
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}`

const Thanks = ({ data }) => {
  return (
    <Layout>
      <SEO title="Thank you" image={data.gotMessage.publicURL.replace('/portfolio','')} />
      <main className="error-page">
        <div className="error-container">
          <GatsbyImage
            image={data.gotMessage.childImageSharp.gatsbyImageData}
            alt="message sent"
            objectFit="cover"
            objectPosition="50% 50%" />
          <h2>Got your message</h2>
          <p>Thank you for getting in touch. I will get back to you shortly.</p>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export default Thanks
