import React from "react"
import bannerStyles from "./banner.module.scss"
//import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default props => (
    <div className={bannerStyles.banner}>
      <div className={bannerStyles.bannerWrap}>
        <div className={bannerStyles.bannerText}>
          <h4>
              {props.text}
          </h4>
        </div>
        <div className={bannerStyles.bannerImg}>
          <Img fluid={props.src}/>
        </div>
        
      </div>
    </div>
  )

