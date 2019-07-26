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
          <title>24 hour RPG Challenge 2018 | Success</title>
        </Helmet>
      </div>
    )
  }
}

export default ({ data }) => {
  return(
    <Layout>
    <Application />
    <Banner title="Getting Involved" src={data.hero.childImageSharp.fluid} />
    <main>
      <div className="intro-section">
        <Container>
          <h2 className="title title--1">Success!</h2>
          <p>Form Submitted Successfully</p>
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
