import React from "react"
import layoutStyles from "./layout.module.scss"
import { Link } from "gatsby"
import logo from "../images/d20.svg"

const ListLink = props => (
  <li className={layoutStyles.menuitem}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <>
    <header className={layoutStyles.header}>
      <Link to="/" className={layoutStyles.logowrapper}>
        <img src={logo} alt="24 hour RPG" />
      </Link>
      <ul className={layoutStyles.menu}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    { children }
    <footer className={layoutStyles.footer}>
      <p>&copy; 24hr RPG fundraising</p>
    </footer>
  </>
)