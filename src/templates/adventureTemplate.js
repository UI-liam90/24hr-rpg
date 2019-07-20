import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
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
  return (
    <Layout>
      <Helmet>
        <title>24 hour RPG Challenge 2019 | {frontmatter.title}</title>
      </Helmet>
      <Banner src={frontmatter.featuredimage.childImageSharp.fluid} />
      <main>
      <div className="adventure-content" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark {
      html
      frontmatter {
        path
        title
        gamemode
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