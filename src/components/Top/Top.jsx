import React from "react"
import topStyles from "./top.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Top = () => {
  const data = useStaticQuery(graphql`
    query {
      topPc:file(relativePath: { eq: "top PC.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      topMobile:file(relativePath: { eq: "top mobile.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
  <div className={topStyles.container}>
    <div className={topStyles.imgPc}>
      <Img fluid={data.topPc.childImageSharp.fluid} />
    </div>
    <div className={topStyles.imgMobile}>
      <Img fluid={data.topMobile.childImageSharp.fluid} />
    </div>
    <div className={topStyles.topPc}>
      <span >買い物に出会いを、<br/>&emsp;&emsp;生活に彩りを。</span>
    </div>
    <div className={topStyles.topMobile}>
      <span>買い物に出会いを、<br/>&emsp;生活に彩りを。</span>
    </div>
  </div>
  );
}

export default Top
