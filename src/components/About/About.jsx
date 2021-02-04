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
          fixed(width: 637 height: 374) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const [isOpen, setIsOpen] = React.useState(false)
  // const [stateの名前, stateを更新する関数] = React.useState(stateの初期値)
  // 真偽値が入る変数の名前にはis〇〇というふうに名前つけがち
  // https://reactjs.org/docs/hooks-state.html

  const handleClick = () => {
    // !true = false, !false = true. setIsOpen(isOpenにセットしたい値)
    setIsOpen(!isOpen)
    // 確認用のconsole.log 開発者ツールのConsoleタブで見られる
    console.log("isOpen:", isOpen)
  }

  return (
    <div className={aboutStyles.container} id="about-us">
      <Title title="About us" subtitle="とれたのについて" />
      <button onClick={() => handleClick()}>Click me!</button>
      {isOpen && <span>Open!</span>}
      {/* isOpenがtrueならば"&&"以降を表示するよ、という意味 */}
      <div className={aboutStyles.aboutContainer}>
        <Img className={aboutStyles.img} fixed={data.file.childImageSharp.fixed} />
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
