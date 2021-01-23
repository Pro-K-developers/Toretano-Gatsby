import React from "react"
import aboutStyles from "./about.module.css"
import Title from "../Title"

const About = () => {
  return (
    <div className={aboutStyles.container}>
      <Title title="About us" subtitle="とれたのについて" />
    </div>
  )
}

export default About
