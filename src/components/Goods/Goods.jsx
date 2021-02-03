import React from "react"
import goodsStyles from "./goods.module.css"
import goodsLink from "../Header.jsx"
import Title from "../Title"

const Goods = () => {
  return <div className={goodsStyles.container + goodsLink.container}>
  <Title title="Goods" subtitle="商品" />
  </div>
}

export default Goods
