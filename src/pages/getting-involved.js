import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
//import PostLink from "../components/post-link"
import Container from "../components/container"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

export default ({ data }) => {
  let imagePath = `https://24hr-rpg.fyi${data.social.childImageSharp.fixed.src}`;
  return(
    <Layout>
    <Helmet>
      <title>24 hour RPG Challenge 2019 | How to get involved</title>
      <meta property="og:image" content={imagePath}/>
      <meta property="og:title" content="24 hour RPG Challenge 2019"/>
      <meta property="og:url" content="https://24hr-rpg.fyi/getting-involved"/>
      <meta property="og:site_name" content="24 hour RPG Challenge"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="24 hour RPG Challenge"/>
      <meta name="twitter:title" content="24 hour RPG Challenge 2019"/>
      <meta name="twitter:description" content="24 hour RPG Challenge 2019 for Galloway's Society for the Blind"/>
      <meta name="twitter:image:src" content={imagePath}/>
      <meta name="twitter:domain" content="24hr-rpg.fyi"/>
    </Helmet>
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
                One way you can get involved is by donating to our Virgin Money Giving page. By doing this you are showing your support for the poor saps who are role-playing as well as raising much deserved money for Galloway's Society for the Blind. 
            </p>
            <p>
                You can donate directly to our Virgin Money Giving page here: <a class="button" href="https://uk.virginmoneygiving.com/Team/24HourRPG" target="_BLANK" rel="noopener noreferrer">Donate</a>.
            </p>
        </Container>
      </div>
      <div id="players" className="play-description">
        <Container>
            <h4 className="title title--2">By Becoming a Player</h4>
            <p>
                Another way you can get involved is by bidding to become a player in one of the adventures. You can bid for a spot in an adventure by using the form on the adventure's information page, or by sending an email to <a href="mailto:kinoandhermes@gmail.com?subject=24%20hour%20RPG">kinoandhermes@gmail.com</a>.
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
                <li>You will need to be available for character creation before the event; your GM will be in touch to arrange this from September 1st.</li>
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
      <div id="players" className="play-description">
        <Container>
        <div className="main-content-grid main-content-grid-50">
          <div className="main-area">
            <h4 className="title title--2">By Becoming a GM</h4>
            <p>
              Got your own group or are an aspiring GM that would like to get involved?
            </p>
            <p>
              We are always looking to add fresh blood to our events and to get as many people involved as possible.
            </p>
            <p>
              For a limited time only, we are accepting applications to become a GM for one of the sessions. You can pick any game system you like and will liaise with the existing GM’s to help make a cohesive experience for everyone involved.
            </p>
            <p>
              Please get in touch with us as soon as possible using the form or by emailing <a href="mailto:kinoandhermes@gmail.com?subject=24%20hour%20RPG">kinoandhermes@gmail.com.</a>
            </p>
            
          </div>
          <div className="sidebar">
            <div className="contact-form">
              <h5>Enquire about GM Spot</h5>
              <form name="I-want-to-be-a-gm" method="post" action="/success/" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="bot-field"/>
              <input type="hidden" name="form-name" value="I-want-to-be-a-gm" />
              <input type="hidden" name="subject" value="I'm Interested in being a GM" />
                <div className="form-element">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" name="name" required/>
                </div>
                <div className="form-element">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" required />
                </div>
                <div className="form-element">
                  <label htmlFor="preferred-game-system">Preferred game system</label>
                  <input id="preferred-game-system" type="text" name="Preferred game system" />
                </div>
                <div className="form-element">
                  <label htmlFor="group-size">Group Size </label><small>(Number of Player you could bring)</small>
                  <input id="group-size" type="number" name="Group Size" />
                </div>
                <div className="form-element">
                  <label htmlFor="max-group-size">Max Group Size </label><small>(Number of Player you could handle)</small>
                  <input id="max-group-size" type="number" name="Max Group Size" />
                </div>
                <div className="form-element">
                  <label htmlFor="other">Any Other Information? </label><small>(Level of experience, Funny moments, etc.)</small>
                  <textarea id="other" name="other"></textarea>
                </div>
                <div className="form-element">
                  <input id="gdpr" type="checkbox" name="GDPR" required />
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
    social: file(relativePath: { eq: "facebook.png" }) {
      childImageSharp {
        fixed(width: 500) {
          src
        }
      }
    }
  }
  `
