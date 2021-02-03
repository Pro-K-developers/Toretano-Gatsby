import React from "react"
import topStyles from "./top.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Top = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "top PC.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
  <div className={topStyles.container}>
    <Img fixed={data.file.childImageSharp.fixed} className = {topStyles.img} />
  </div>
  );
}

export default Top
