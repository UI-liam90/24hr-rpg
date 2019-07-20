import React from "react"
import bannerStyles from "./banner.module.scss"
//import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default props => (
    <div className={bannerStyles.banner}>
      <div className={bannerStyles.bannerWrap}>
        <div className={bannerStyles.bannerText}>
          <h1>{props.title}</h1>
          <h2>{props.subTitle}</h2>
        </div>
        <div className={bannerStyles.bannerImg}>
          <Img fluid={props.src}/>
        </div>
        
      </div>
    </div>
  )

