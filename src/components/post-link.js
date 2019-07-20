import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const postLink = ({ adventure }) => (
  <div className="adventures-section__block">
    <Link to={adventure.frontmatter.path}>
      <Img fluid={adventure.frontmatter.featuredimage.childImageSharp.fluid} />
      <span>{adventure.frontmatter.title}</span>
    </Link>
    <p>By {adventure.frontmatter.runby}</p>
  </div>
)
export default postLink