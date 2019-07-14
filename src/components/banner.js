import React from "react"
import bannerStyles from "./banner.module.scss"
//import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default props => (
    <div className={bannerStyles.banner}>
      <div className={bannerStyles.bannerWrap}>
        <div className={bannerStyles.bannerText}>
          <h4>
              28th - 29th September 2019 
              <br/>
              <span>At Prince of Wales Hotel Southport</span> 
          </h4>
        </div>
        <div className={bannerStyles.bannerImg}>
          <Img fixed={props.src}/>
        </div>
        
      </div>
    </div>
  )

