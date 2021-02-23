import React from "react"
import contactStyles from "./contact.module.css"
import Title from "../Title"
import { FacebookProvider, Page } from "react-facebook"

const Contact = () => {
  return (
    <div className={contactStyles.container} id="contact">
      <Title title="Contact" subtitle="もっと知りたい方はこちらも" />

      <ul className={contactStyles.a}>
        <li>
          <a
            href="https://www.facebook.com/toretano/"
            className={contactStyles.Facebook_a}
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/toretano/"
            className={contactStyles.Instagram_a}
          >
            Instagram
          </a>
        </li>
      </ul>
      <ul className={contactStyles.b}>
        <li>
          <a
            href="https://www.facebook.com/toretano/"
            className={contactStyles.Facebook_b}
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/toretano/"
            className={contactStyles.Instagram_b}
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact
