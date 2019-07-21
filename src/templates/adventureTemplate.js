import React from "react"
import { graphql } from "gatsby"
import Banner from "../components/banner"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

// class Application extends React.Component {
//   render() {
//     return (
//       <div className="application">
//         <Helmet>
//           <title>24 hour RPG Challenge 2018 | About The Event</title>
//         </Helmet>
//       </div>
//     )
//   }
// }

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  let subTitle = `by ${frontmatter.runby}`
  return (
    <Layout>
      <Helmet>
        <title>24 hour RPG Challenge 2019 | {frontmatter.title}</title>
      </Helmet>
      <Banner title={frontmatter.title} subTitle={subTitle} src={frontmatter.featuredimage.childImageSharp.fluid} />
      <main>
       <Container>
        <div className="adventures-section">
          <p><strong>Game Mode:</strong> {frontmatter.gamemode}</p>
          <div className="adventure-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
       </Container>
      </main>
      <div className="blog-post-container">
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        path
        title
        gamemode
        runby
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
