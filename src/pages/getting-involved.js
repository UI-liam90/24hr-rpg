import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
//import PostLink from "../components/post-link"
import Container from "../components/container"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <title>24 hour RPG Challenge 2018 | How to get involved</title>
        </Helmet>
      </div>
    )
  }
}

export default ({ data }) => {
  return(
    <Layout>
    <Application />
    <Banner title="Getting Involved" src={data.hero.childImageSharp.fluid} />
    <main>
      <div className="intro-section">
        <Container>
          <h2 className="title title--1">How To Get Involved</h2>
          <p>There are a few way you can get involved:</p>
        </Container>
      </div>
      <div className="donate-desciption">
        <Container>
            <h4 className="title title--2 title--white">By Donating</h4>
            <p>
                We Are still finalising the best way to donate to Galloway's Society For the Blind. Please check back soon for more information on how you can donate.
            </p>
        </Container>
      </div>
      <div className="play-description">
        <Container>
            <h4 className="title title--2">By Becoming a Player</h4>
            <p>
                Another way you can get involved is by bidding to become a player in one of the adventures. You can bid for a spot in an adventure by sending an email to  <a className="cl04" href="mailto:kinoandhermes@gmail.com?subject=24%20hour%20RPG">kinoandhermes@gmail.com</a>.
            </p>
            <p>
                We will be closing bids at midnight on 31st August and announcing the final player list for each campaign on September 1st.
            </p>
            <p>
                Please be aware of the following if you are successful in your bid:
            </p>
            <ul className="main-list">
                <li>You will need to pay your bid before the date of the event.</li>
                <li>You will be expected to play in your chosen campaign for the full allotted time.</li>
                <li>You will need to be available for character creation before the event; your GM will be in touch to arrange this from 1st Nov.</li>
                <li>If you can't make the event after being successful in your bid please let us know ASAP, as we will have plenty of players who would love to have your place.</li>
                <li>This is a charity event, so all bids paid are non refundable.</li>
            </ul>
            <p>
                If you are not successful in getting a place please do not be disheartened, you can still support the event in other ways. We would love it if you would consider still donating to the event or sponsoring another player. 
            </p>
        </Container>
      </div>
      <div className="sponsor-description">
        <Container>
            <h4 className="title title--2 title--white">By Sponsoring</h4>
            <p>
                You can give a flat donation or sponsor, but to make things interesting you can also give a special kind of sponsor to one of the players who are getting involved in the event. 
            </p>
            <p>
                For £5 a pop, you will be able to help or hinder a player of your choice via a Friend or Foe sponsorship. If you choose to sponsor them as a Friend then you will give the player a free re-roll for the session, to tweak their fate for the better. If you choose Foe however, you will give the player's GM a re-roll to use against the hapless fool! 
            </p>
            <p>
                Sponsorship forms will be available to download soon.
            </p>
        </Container>
      </div>
    </main>
  </Layout>
  )
}
export const query = graphql`
  query {
    hero: file(relativePath: { eq: "pages/involved.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  `