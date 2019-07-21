import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import logo from "../images/d20.svg"
import FooterPostLink from "./footer-post-link"
import HeaderMenu from "./header-menu"



export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
    query {
      adventures: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "adventureTemplate"}}}, sort: { order: ASC, fields: [frontmatter___title] }) {
        edges {
          node {
            id
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
      }
    }
    `
  )
  const FooterAdventures = data.adventures.edges
    .map(edge => <FooterPostLink key={edge.node.id} footerAdventure={edge.node} />)
  return(
    <>
    <header className="header">
    <div className="header__wrap">
      <Link to="/" className="logowrapper">
        <img src={logo} alt="24 hour RPG" />
      </Link>
      <HeaderMenu />
    </div>
    </header>
    { children }
    <footer className="footer">
      <div className="footerTop">
        <div className="footerTop__column">
          <h5>Adventures</h5>
          <ul>
            { FooterAdventures }
          </ul>
        </div>

      </div>
      <div className="footerBottom">
        <p>&copy; 24hr RPG fundraising</p>
      </div>
    </footer>
  </>
  ) 
}