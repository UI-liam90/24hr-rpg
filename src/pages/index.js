import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <title>24 hour RPG Challenge 2018 | About The Event</title>
        </Helmet>
      </div>
    )
  }
}
export default ({ data }) => {
  console.log(data)
  return(
    <Layout>
    <Application />
    <Banner src={data.hero.childImageSharp.fluid} />
      <div className="intro-section">
        <h2 className="intro-section__title">About The Event</h2>
        <p>It’s time for our 5th 24 hour RPG challenge can you believe we have been doing this for 5 years now, that is crazy!!</p>
        <p>This year we ahve chosen to raise money for Galloway's Society For the Blind. Galloway’s Society for the Blind was established in 1867 and has since grown to provide a range of services to over 7000 Blind and Partially Sighted people across Lancashire and Sefton area. They need to raise over £1 million each and every year to meet the cost of its existing services and we want to help them reach that goal this year!</p>
      </div>
      <div className="happening-section">
        <h4 className="happening-section__title">What's happening</h4>
        <p>Due to the populatity of last year's format of running 3 different types of adventure to help more people get involved in the event will be doing the same again this year, find out more about the formats below:</p>
        <ul className="">
            <li><strong>Pure Mode</strong> - 10am - 10am, full 24 hour endurance events for those up to the challenge</li>
            <li><strong>Mellow Mode</strong> - Two 12 hour events with a gap in the middle, 10am-10pm on both Saturday and Sunday, for those who want a more chilled and social event.</li>
            <li><strong>Rush Mode</strong> - 12 hour event, 10am on  the Saturday, for those who want to take part but can't commit to 24 hours or both days.
            </li>
        </ul>
        <p><strong>Please Note</strong> - All games may overrun (up to an hour for finishing up and tidying), so make sure you have made suitable arrangements.</p>
        <p>You can find out more about the adventures being run <a href="/adventures/">here</a>. You can also enquire, if you are up for the challenge, about being a GM <a href="/getting-involved/become-a-gm/">here</a></p>
        <p>On the day, if it is like our previous attempts, there will no doubt be a running commentary, photos, and a live stream to show the depths of stress we can get into as the night continues.</p>
        <p>It will most definitely be a feat of endurance, logistics, and skill (and fun). Do YOU take up the challenge?</p>
        <h4 className="main-content__title main-content__title--small">How to get involved</h4>
        <p>The players will bid real money to take part, with the highest bids/donations taking a place at one of the tables, you can read more about becoming a player <a href="/getting-involved/#player">here</a>. It will also need support refs as well as support from as many people as possible to make it as unique, special and worthwhile as it can be.</p>
        <p>Sponsors can also influence the outcome of the game. <a href="/getting-involved/#sponsor">Further details can be found here</a></p> 
      </div>
  </Layout>
  )
}
export const query = graphql`
  query {
    hero: file(relativePath: { eq: "pages/dnd.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  `