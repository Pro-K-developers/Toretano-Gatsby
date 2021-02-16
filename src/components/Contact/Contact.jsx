import React from "react"
import contactStyles from "./contact.module.css"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FacebookProvider, Page } from "react-facebook"

const Contact = () => {
  return (
    <div className={contactStyles.container} id="contact">
      <Title title="Contact" subtitle="もっと知りたい方はこちらも" />

      <ul className={contactStyles.a}>
        <li>
          Facabook
          <FacebookProvider appId="123456789">
            <Page href="https://www.facebook.com/toretano/" tabs="timeline" />
          </FacebookProvider>
        </li>
        <li>Instagram</li>
      </ul>
      <ul className={contactStyles.b}>
        <li>
          Facebook
          <FacebookProvider appId="123456789">
            <Page href="https://www.facebook.com/toretano/" tabs="timeline" />
          </FacebookProvider>
        </li>
        <li>Instagram</li>
      </ul>
    </div>
  )
}

export default Contact
