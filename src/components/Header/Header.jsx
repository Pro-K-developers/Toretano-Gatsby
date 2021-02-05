import React from "react"
import headerStyles from "./header.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [isOpen, setIsOpen] = React.useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    console.log("isOpen:", isOpen)
  }

  return (
  <div className={headerStyles.container}>
    <Img fixed={data.file.childImageSharp.fixed} className={headerStyles.logo}/>
    <ul className={headerStyles.nav}>
      <li><a href="#about-us">About us</a></li>
      <li><a href="#goods">Goods</a></li>
      <li><a href="#feature">Feature</a></li>
      <li><a href="#access">Access</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    {!isOpen && (
      <button className={headerStyles.button} onClick={() => handleClick()}>
        ≡
      </button>
      )}
    {isOpen && (
      <button className={headerStyles.button} onClick={() => handleClick()}>
        ×
      </button>
      )}
      {isOpen && (
      <div className={headerStyles.menu}>
        <ul onClick={() => handleClick()}>
            <li><a href="#about-us">About us</a></li>
            <li><a href="#goods">Goods</a></li>
            <li><a href="#feature">Feature</a></li>
            <li><a href="#access">Access</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      )}
  </div>
  );
}

export default Header
