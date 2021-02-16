import React from "react"
import aboutStyles from "./about.module.css"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query Query {
      file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={aboutStyles.container} id="about-us">
      <Title title="About us" subtitle="とれたのについて" />
      <div className={aboutStyles.aboutContainer}>
        <div className={aboutStyles.img}>
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className={aboutStyles.captionWrap}>
          <p className={aboutStyles.caption}>
          「とれたの」は、とれたてのくにたち野菜と<br />こだわりの地域物産を販売するお店です。
          </p>
          <p className={aboutStyles.caption}>
          「むっさ21商店街」の中にあり、<br />「北口商店会」・「ダイヤ街」を合わせた<br />谷保三商店街の店主や地域住民の協力の下、<br />学生が運営しています。
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
