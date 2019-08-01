import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import Container from "../components/container"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <title>24 hour RPG Challenge 2019 | About The Event</title>
        </Helmet>
      </div>
    )
  }
}

export default ({ data }) => {
  console.log(data)
  const Adventures = data.adventures.edges
    .map(edge => <PostLink key={edge.node.id} adventure={edge.node} />)
  return(
    <Layout>
    <Application />
    <Banner title="28th - 29th September 2019" subTitle="At Prince of Wales Hotel Southport" src={data.hero.childImageSharp.fluid} />
    <main>
      <div className="intro-section">
        <Container>
          <h2 className="title title--1">About The Event</h2>
          <p>It’s time for our 5th 24 hour RPG challenge! Can you believe we have been doing this for 5 years now, that is crazy!!</p>
          <p>This year we have chosen to raise money for Galloway's Society for the Blind, who provide excellent advice and support for those of us who are blind or partially-sighted. Sight loss affects people of all ages, and as we grow older we are increasingly likely to experience sight loss. Galloway’s Society for the Blind provide a range of services to over 7000 Blind and Partially Sighted people across Lancashire and Sefton area. They need to raise over £1 million each year to meet the cost of its existing services and we want to help them anyway we can to reach that goal this year!</p>
        </Container>
      </div>
      <div className="happening-section">
        <Container>
          <h4 className="title title--2 title--white">What's happening</h4>
          <p>Just like previous year we will be running a number of RPG campaigns which players will be able to take.</p>
          <p>The players will bid real money to take part, with the highest bids/donations taking a place at one of the tables, you can read more about becoming a player <a href="/getting-involved/#players">here</a>. It will also need support refs as well as support from as many people as possible to make it as unique, special and worthwhile as it can be like previous years.</p>
          <p>Due to the popularity of last year's format of running 3 different types of adventure in we will be doing the same again this year with the hope of getting as many people involved that we can, find out more about the formats below:</p>
          <ul className="gamemodes">
              <li>
                <svg className="gamemodes__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.23 68"><path fill-rule="evenodd" d="M47.22,26.79l-.19-.2c-.07-.07-.13-.14-.2-.2l.4.39-.2-.19-.2-.19A15,15,0,0,0,26,26.78l-.39.39-.39-.39A15,15,0,0,0,4.41,26.4l-.21.19-.2.19.4-.39c-.07.06-.13.13-.2.2l-.19.2A15,15,0,0,0,4.4,47.61l19.8,19.8a2,2,0,0,0,2.83,0l19.8-19.8A15,15,0,0,0,47.22,26.79ZM22.4,29.61l1.8,1.8a2,2,0,0,0,2.83,0l1.8-1.8a11,11,0,0,1,15.37-.19A11,11,0,0,1,44,44.78L25.62,63.17,7.23,44.78A11,11,0,0,1,7,29.42,11,11,0,0,1,22.4,29.61ZM25.62,16c11,0,20-3,20-8s-9-8-20-8-20,3-20,8S14.58,16,25.62,16Zm0-4a40.27,40.27,0,0,1-12.1-1.65,10.88,10.88,0,0,1-3.25-1.59c-.49-.38-.65-.65-.65-.76s.16-.38.65-.76a10.88,10.88,0,0,1,3.25-1.59A40.27,40.27,0,0,1,25.62,4,40.2,40.2,0,0,1,37.71,5.65,10.88,10.88,0,0,1,41,7.24c.49.38.66.65.66.76s-.17.38-.66.76a10.88,10.88,0,0,1-3.25,1.59A40.2,40.2,0,0,1,25.62,12Z"/></svg>
                <h5>Pure Mode</h5>
                <p>10am - 10am, full 24 hour endurance events for those up to the challenge</p>
              </li>
              <li>
                <svg className="gamemodes__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 20"><path fill-rule="evenodd" d="M1,17a2,2,0,0,0,2,2H23a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H3A2,2,0,0,0,1,3ZM3,0H23a3,3,0,0,1,3,3V17a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0Z"/><path fill-rule="evenodd" d="M19.5,8a.5.5,0,0,0,0-1H16a.5.5,0,0,0-.5.5,1.5,1.5,0,0,0,2.91.5ZM6,8A.5.5,0,0,1,6,7H9.5a.5.5,0,0,1,.5.5A1.5,1.5,0,0,1,7.09,8Zm5.42,5.24a1.56,1.56,0,0,0,.37.36,2,2,0,0,0,2.42,0,1.56,1.56,0,0,0,.37-.36.49.49,0,0,1,.84.52,2.27,2.27,0,0,1-.6.64,3.06,3.06,0,0,1-3.64,0,2.27,2.27,0,0,1-.6-.64.49.49,0,0,1,.84-.52Z"/></svg>
                <h5>Mellow Mode</h5>
                <p>Two 12 hour events with a gap in the middle, 10am-10pm on both Saturday and Sunday, for those who want a more chilled and social event.</p>
              </li>
              <li>
                <svg className="gamemodes__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 361.88 490.9"><title>rush</title><path d="M7.39,490.9a7.54,7.54,0,0,1-4.7-1.7A7.39,7.39,0,0,1,1,479.8l130.7-223.1H26.29a7.35,7.35,0,0,1-6.2-3.4,7.45,7.45,0,0,1-.4-7.1l116.9-242a7.43,7.43,0,0,1,6.6-4.2h0l155.4.3A7.36,7.36,0,0,1,305,4.1a7.46,7.46,0,0,1-.2,7.5l-97.2,155.1,147,.8a7.22,7.22,0,0,1,6.8,4.8,7.3,7.3,0,0,1-2,8.1L12.29,489A7.21,7.21,0,0,1,7.39,490.9ZM38,242h106.5a7.39,7.39,0,0,1,6.4,3.7,7.51,7.51,0,0,1,0,7.4L37.19,447.2l298.2-265.1-141-.8a7.36,7.36,0,0,1-6.4-3.8,7.27,7.27,0,0,1,.2-7.4l97.2-155.2-137.6-.2Z"/></svg>
                <h5>Rush Mode</h5> 
                <p>12 hour event, 10am on the Saturday, for those who want to take part but can't commit to 24 hours or both days.</p>
              </li>
          </ul>
        </Container>
        
      </div>
      <div className="adventures-section">
        <Container>
          <h4 className="title title--2">This Years Adventures</h4>
          <div className="adventures-section__wrap">
            {Adventures}
          </div>
        </Container>
      </div>
    </main>
  </Layout>
  )
}
export const query = graphql`
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
    hero: file(relativePath: { eq: "pages/dnd.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  `