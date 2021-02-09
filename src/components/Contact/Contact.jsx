import React from "react"
import contactStyles from "./contact.module.css"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Contact = () => {
  return (
    <div className={contactStyles.container}>
      <Title title="Contact" subtitle="もっと知りたい方はこちらも" />

      <ul className={contactStyles.a}>
        <li>
          Facabook
          <div id="fb-root"></div>
          <script
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v9.0"
            nonce="X31xHV0s"
          ></script>
          <div
            class="fb-page"
            data-href="https://www.facebook.com/toretano/"
            data-tabs="timeline"
            data-width="337"
            data-height="388"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/toretano/"
              class="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/toretano/">とれたの</a>
            </blockquote>
          </div>
        </li>
        <li>Instagram</li>
      </ul>
      <ul className={contactStyles.b}>
        <li>
          Facebook<div id="fb-root"></div>
          <script
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v9.0"
            nonce="X31xHV0s"
          ></script>
          <div
            class="fb-page"
            data-href="https://www.facebook.com/toretano/"
            data-tabs="timeline"
            data-width="337"
            data-height="388"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/toretano/"
              class="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/toretano/">とれたの</a>
            </blockquote>
          </div>
        </li>
        <li>Instagram</li>
      </ul>
    </div>
  )
}

export default Contact
