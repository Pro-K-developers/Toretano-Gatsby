import React from "react"
import goodsStyles from "./goods.module.css"
import Img from "gatsby-image"

const GoodsItem = ({tag,img,cap1,cap2,cap3,isReverse}) => {

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
        <div className={goodsStyles.isReverse}>
         {isReverse}
        </div>
      </div>
    </div>
)
}

export default GoodsItem