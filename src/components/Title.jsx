import React from "react"

const Title = ({ title, subtitle }) => {
  return (
    <h1 className="title-wrap">
      <span className="title">{title}</span>
      <span className="subtitle">{subtitle}</span>
    </h1>
  )
}

export default Title
