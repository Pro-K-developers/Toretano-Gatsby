import React from "react"
import featureStyles from "./feature.module.css"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Feature = () => {
  return (
    <div className={featureStyles.container}>
      <Title title="Feature" subtitle="イチオシ" />
      <p className={featureStyles.honey_pc}>
        現在、とれたのでは中央蜂蜜さまのはちみつを販売中！<br></br>
        国産も含め、全て無添加の純粋はちみつとなっております。
      </p>
      <p className={featureStyles.honey_mobile}>
        現在、とれたのでは中央蜂蜜さまの<br></br>はちみつを販売中！<br></br>
        国産も含め、全て無添加の<br></br>純粋はちみつとなっております。
      </p>
    </div>
  )
}

export default Feature
