import React from "react"
import { Link } from "gatsby"

const footerPostLink = ({ footerAdventure }) => (
  <>
  <li>
    <Link to={footerAdventure.frontmatter.path}>
      <span>{footerAdventure.frontmatter.title}</span>
    </Link>
  </li>
    
  </>
)
export default footerPostLink