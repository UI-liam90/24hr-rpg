import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
//import PostLink from "../components/post-link"
import Container from "../components/container"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <title>24 hour RPG Challenge 2019 | Success</title>
          <meta property="og:title" content="24 hour RPG Challenge 2019"/>
          <meta property="og:url" content="https://24hr-rpg.fyi/success"/>
          <meta property="og:site_name" content="24 hour RPG Challenge"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="24 hour RPG Challenge"/>
          <meta name="twitter:title" content="24 hour RPG Challenge 2019"/>
          <meta name="twitter:description" content="24 hour RPG Challenge 2019 for Galloway's Society for the Blind"/>
          <meta name="twitter:domain" content="24hr-rpg.fyi"/>
        </Helmet>
      </div>
    )
  }
}

export default ({ data }) => {
  return(
    <Layout>
    <Application />
    <Banner title="Form Submission Success" src={data.hero.childImageSharp.fluid} />
    <main>
      <div className="intro-section">
        <Container>
          <h2 className="title title--1">Success!</h2>
          <p>Thank you for your submission. Someone will be in touch shortly to answer your question or to advise on your bid.</p>
        </Container>
      </div>
    </main>
  </Layout>
  )
}
export const query = graphql`
  query {
    hero: file(relativePath: { eq: "pages/involved.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  `
