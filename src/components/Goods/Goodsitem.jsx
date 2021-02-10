import React from "react"
import goodsStyles from "./goods.module.css"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GoodsItem = ({tag,img,cap1,cap2,cap3}) => {
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

return(
    <div 
    　className={goodsStyles.goodscontainer}
    　style={isReverse && { flexDirection: "column-reverse" }}
    >
      <p className={goodsStyles.tagMobile}>{tag}</p>
      <div className={goodsStyles.img}>
        <Img fluid={img} />
      </div>
      <div className={goodsStyles.captionWrap}>
        <p className={goodsStyles.tagPc}>{tag}</p>
        <p className={goodsStyles.caption}>
          {cap1}
        </p>
        <p className={goodsStyles.caption}>
         {cap2}
         </p>
         <p className={goodsStyles.caption}>
         {cap3}
        </p>
      </div>
    </div>
)
}

export default GoodsItem