import React from "react"
import { graphql } from "gatsby"
import Banner from "../components/banner"
import Layout from "../components/layout"
import Container from "../components/container"
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
  let formSubject = `I want to play ${frontmatter.title}`
  return (
    <Layout>
      <Helmet>
        <title>24 hour RPG Challenge 2019 | {frontmatter.title}</title>
      </Helmet>
      <Banner title={frontmatter.title} subTitle={subTitle} src={frontmatter.featuredimage.childImageSharp.fluid} />
      <main>
       <Container>
        <div className="main-content-grid">
          <div className="main-area adventures-section">
            <p><strong>Game Mode:</strong> {frontmatter.gamemode}</p>
            <div className="adventure-content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <div className="sidebar">
            <div className="contact-form">
              <h5>Want to get involved in this adventure?</h5>
              <p> Please use the form below to register your interest or email <a href="mailto:kinoandhermes@gmail.com?subject=24%20hour%20RPG">kinoandhermes@gmail.com</a> directly.</p>
              <form name="I-want-to-play" method="post" action="/success/" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="bot-field"/>
              <input type="hidden" name="form-name" value="I-want-to-play" />
              <input type="hidden" name="subject" value={formSubject} />
                <div className="form-element">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" name="name" />
                </div>
                <div className="form-element">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" />
                </div>
                <div className="form-element">
                  <label htmlFor="bid">Bid Amount</label>
                  <input id="bid" type="number" name="bid" />
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
