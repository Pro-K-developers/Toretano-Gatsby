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
          fixed(width: 300) {
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
    <div className={aboutStyles.container}>
      <Title title="About us" subtitle="とれたのについて" />
      <button onClick={() => handleClick()}>Click me!</button>
      {isOpen && <span>Open!</span>}
      {/* isOpenがtrueならば"&&"以降を表示するよ、という意味 */}
      <Img fixed={data.file.childImageSharp.fixed} />
    </div>
  )
}

export default About
