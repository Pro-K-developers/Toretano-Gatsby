import React from "react"
import goodsStyles from "./goods.module.css"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import GoodsItem from "./Goodsitem"

const Goods = () => {
  const data = useStaticQuery(graphql`
    query {
      goods1:file(relativePath: { eq: "goods1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      goods2:file(relativePath: { eq: "goods2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
  <div className={goodsStyles.container} id="goods">
    <Title title="Goods" subtitle="商品" />
    <GoodsItem
      tag="くにたち野菜"
      img={data.goods1.childImageSharp.fluid}
      cap1="その日の朝に仕入れたばかり。"
      cap2="安心、安全、新鮮なくにたち野菜を"
      cap3="お届け。"
    />
    <GoodsItem
      tag="物産"
      img={data.goods2.childImageSharp.fluid}
      cap1="スタッフが選び抜いた全国の物産、"
      cap2="こだわりの国立市物産を販売。"
    />
    
  </div>
  )
}

export default Goods
