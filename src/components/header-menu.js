import React from "react"
import { Link } from "gatsby"


const ListLink = props => (
  <li className="menuitem">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const MenuIcon = () => 
<svg id="hamburger-icon" class="hamburger-icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 32 32" enable-background="new 0 0 64 64" xmlSpace="preserve">
  <g class="hamburger-icon__container">
    <path class="hamburger-icon__line hamburger-icon__top" d="M4,10h24c1.1,0,2-0.9,2-2s-0.9-2-2-2H4C2.9,6,2,6.9,2,8S2.9,10,4,10z"/>
    <path class="hamburger-icon__line hamburger-icon__middle" d="M28,14H4c-1.1,0-2,0.9-2,2s0.9,2,2,2h24c1.1,0,2-0.9,2-2S29.1,14,28,14z"/>
    <path class="hamburger-icon__line hamburger-icon__bottom" d="M28,22H4c-1.1,0-2,0.9-2,2s0.9,2,2,2h24c1.1,0,2-0.9,2-2S29.1,22,28,22z"/>
  </g>
</svg>
class HeaderMenu extends React.Component {

  constructor(props) {
    super(props);
    
    this.menuClick = this.menuClick.bind(this);
    this.submenuClick = this.submenuClick.bind(this);
    this.state = {
      menuClass: '',
      submenuClass: '',
    }
  }
  
  menuClick(e) {
    const menuClass = this.state.menuClass === '' ? 'menu--active' : '';
    this.setState({ menuClass });
  }
  submenuClick(e) {
    const submenuClass = this.state.submenuClass === '' ? 'submenu--active' : '';
    this.setState({ submenuClass });
  }
  render() {
    const menuClassName = `header__nav ${this.state.menuClass}`;
    const submenuClassName = `child-menu ${this.state.submenuClass}`;
    const Adventures = this.props.adventureData
    .map(edge => <ListLink to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</ListLink>)
    return (
      <nav className={menuClassName}>
        <span className="menu-icon nav-toggle" onClick={this.menuClick}>
          <MenuIcon />
        </span>
        <ul className="menu">
          <ListLink to="/">Home</ListLink>
          <ListLink to="/getting-involved">Get involved</ListLink>
          <li className={submenuClassName}>
            <span onClick={this.submenuClick}>Adventures</span>
            <ul className="sub-menu">
              { Adventures }
            </ul>
          </li>
        </ul>
      </nav>
    );

  }
}

export default HeaderMenu
