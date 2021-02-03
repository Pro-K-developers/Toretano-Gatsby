import React from "react"
import headerStyles from "./header.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query Query {
      file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
  <div className={headerStyles.container}>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Img fixed={data.file.childImageSharp.fixed} />
    <ul className={headerStyles.nav}>
      <li><a href="#about-us">About us</a></li>
      <li><a href="#goods">Goods</a></li>
      <li><a href="#feature">Feature</a></li>
      <li><a href="#access">Access</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
  );
}

export default Header
