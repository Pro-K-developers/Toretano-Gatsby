import React from "react"
import contactStyles from "./contact.module.css"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Contact = () => {
  return (
    <div className={contactStyles.container}>
      <Title title="Contact" subtitle="もっと知りたい方はこちらも" />
      <Img src="http://placehold.jp/{100}x{100}.png" />
      <ul className={contactStyles.a}>
        <li>Facebook</li>
        <li>Instagram</li>
      </ul>
      <ul className={contactStyles.b}>
        <li>Facebook</li>
        <li>Instagram</li>
      </ul>
    </div>
  )
}

export default Contact
