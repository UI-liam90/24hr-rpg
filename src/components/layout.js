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
      <HeaderMenu adventureData={data.adventures.edges} />
      <div class="social-icons">
        {/* <a class="social-icon social-icon--facebook" href="https://www.facebook.com/events/248989785821596/">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.9 43.76"><title>Facebook</title><path d="M19,0,0,10.94V32.82L19,43.76l19-10.94V10.94Zm5.66,15.2H21.73c-.93,0-1.12.38-1.12,1.33V18.2h4l-.36,4H20.61v12h-5v-12h-3v-4h3V14.81c0-3,1.6-4.61,5.19-4.61h3.81Z"></path></svg>
        </a> */}
        <a class="social-icon social-icon--twitter" href="https://twitter.com/24hr_rpg">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.9 43.76"><title>Twitter</title><path d="M19,0,0,10.94V32.82L19,43.76l19-10.94V10.94Zm9.54,17A14,14,0,0,1,7,29.42a9.91,9.91,0,0,0,7.29-2A4.92,4.92,0,0,1,9.64,24a4.86,4.86,0,0,0,2.22-.08A4.93,4.93,0,0,1,7.92,19a4.79,4.79,0,0,0,2.22.61A4.93,4.93,0,0,1,8.62,13a14,14,0,0,0,10.15,5.14,4.93,4.93,0,0,1,8.39-4.49,10,10,0,0,0,3.13-1.19,4.94,4.94,0,0,1-2.17,2.72A9.87,9.87,0,0,0,31,14.44,9.94,9.94,0,0,1,28.49,17Z"></path></svg>
        </a>
      </div>
    </div>
    </header>
    { children }
    <footer className="footer">
      <div className="footerTop">
        <div className="footerTop__grid">
          <div className="footerTop__column footerTop__column--one">
            <h5>Adventures</h5>
            <ul>
              { FooterAdventures }
            </ul>
          </div>
          <div className="footerTop__column footerTop__column--two">
            <div className="contact-form contact-form--transparent">
              <h5>Got a Question</h5>
              <p>Then you can contact us by using the form below, or by emailing <a href="mailto:kinoandhermes@gmail.com?subject=24%20hour%20RPG">kinoandhermes@gmail.com</a> directly.</p>
              <form name="general-enquiry" method="post" action="/success/" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="bot-field"/>
              <input type="hidden" name="form-name" value="general-enquiry" />
              <input type="hidden" name="subject" value="General Enquiry" />
                <div className="form-element">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" name="name" />
                </div>
                <div className="form-element">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" />
                </div>
                <div className="form-element">
                  <label htmlFor="enquiry">Enquiry</label>
                  <textarea id="enquiry" name="enquiry"></textarea>
                </div>
                <div className="form-element">
                  <input id="gdpr" type="checkbox" name="GDPR" />
                  <label htmlFor="gdpr">I agree to be contacted by 24hr RPG regarding my bid. 24hr RPG will not pass your details onto any third parties.</label>
                </div>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerBottom__wrap">
          <p>&copy; 24hr RPG fundraising</p>
        </div>
      </div>
    </footer>
  </>
  ) 
}