import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default props => (
    <div className="banner">
      <div className="bannerWrap">
        <div className="bannerText">
          <h1>{props.title}</h1>
          <h2>{props.subTitle}</h2>
        </div>
        <div className="bannerImg">
          <Img fluid={props.src}/>
        </div>
      </div>
    </div>
  )

