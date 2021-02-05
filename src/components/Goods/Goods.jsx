import React from "react"
import goodsStyles from "./goods.module.css"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Goods = () => {
  const data = useStaticQuery(graphql`
    query {
      goods1:file(relativePath: { eq: "goods1.jpg" }) {
        childImageSharp {
          fixed(width: 477  height: 360) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      goods2:file(relativePath: { eq: "goods2.jpg" }) {
        childImageSharp {
          fixed(width: 477 height: 360) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
  <div className={goodsStyles.container} id="goods">
    <Title title="Goods" subtitle="商品" />
    <div className={goodsStyles.goodsContainer1}>
      <p className={goodsStyles.tagMobile}>くにたち野菜</p>
      <Img className={goodsStyles.img} fixed={data.goods1.childImageSharp.fixed} />
      <div className={goodsStyles.captionWrap}>
        <p className={goodsStyles.tagPc}>くにたち野菜</p>
        <p className={goodsStyles.caption}>
          その日の朝に仕入れたばかり。
        </p>
        <p className={goodsStyles.caption}>
          安心、安全、新鮮なくにたち野菜を<br />お届け。
        </p>
      </div>
    </div>
    <div className={goodsStyles.goodsContainer2}>
      <p className={goodsStyles.tagMobile}>物産</p>
      <Img className={goodsStyles.img} fixed={data.goods2.childImageSharp.fixed} />
      <div className={goodsStyles.captionWrap}>
        <p className={goodsStyles.tagPc}>物産</p>
        <p className={goodsStyles.caption}>
          スタッフが選び抜いた全国の物産、<br />こだわりの国立市物産を販売。
        </p>
      </div>
    </div>
  </div>
  )
}

export default Goods
