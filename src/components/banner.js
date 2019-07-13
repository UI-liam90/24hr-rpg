import React from "react"
import bannerStyles from "./banner.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(
    graphql`
    query {
      hero: file(relativePath: { eq: "pages/hero-2018.jpg" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
    `
  )
  return (
    <div className={bannerStyles.banner}>
      <Img fixed={data.hero.childImageSharp.fixed} />
    </div>
  )
}
