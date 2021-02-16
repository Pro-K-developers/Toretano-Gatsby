import React from "react"
import featureStyles from "./feature.module.css"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Feature = () => {
  return (
    <div className={featureStyles.container} id="feature">
      <Title title="Feature" subtitle="イチオシ" />
      <p className={featureStyles.imagewrap}>
        <img src="/static/e2139543bde5140a5326f6e1942872d3/honey4.png" alt="" />
        <img src="/static/2c3d667c9adf0c55fa9357756ea64a86/honey7.png" alt="" />
        <img src="/static/c39b269d981abc99ffc5812b18601725/honey5.png" alt="" />
      </p>
      <p className={featureStyles.honey_pc}>
        現在、とれたのでは中央蜂蜜さまのはちみつを販売中！<br></br>
        国産も含め、全て無添加の純粋はちみつとなっております。
      </p>
      <p className={featureStyles.imagewrap}>
        <img src="/static/1d3b184bea6299e3d21f57f941ebc9f2/honey1.png" alt="" />
        <img src="/static/babbc9b633636106ecff2e64a6db2ba1/honey2.png" alt="" />
        <img src="/static/afd2e59c23b5ca560cdb54a5fc8ed3ad/honey6.png" alt="" />
        <img src="/static/ac8b305b21cf92d93ad20341de5e7b50/honey3.png" alt="" />
      </p>
      <p className={featureStyles.honey_mobile}>
        現在、とれたのでは中央蜂蜜さまの<br></br>はちみつを販売中！<br></br>
        国産も含め、全て無添加の<br></br>純粋はちみつとなっております。
      </p>
      <img
        className={featureStyles.imagemobile}
        src="/static/10f07cb8ecce634b2068285d66db4732/honey_mobile.png"
        alt=""
      />
    </div>
  )
}

export default Feature
