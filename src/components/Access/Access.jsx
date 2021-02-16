import React from "react"
import accessStyles from "./access.module.css"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Access = () => {
  return (
    <div className={accessStyles.container} id="access">
      <Title title="Access" subtitle="店舗情報" />
      <h1 className={accessStyles.shopname}>
        くにたち野菜と地域物産の店「とれたの」
      </h1>
      <h1 className={accessStyles.shopname_mobile}>
        くにたち野菜と地域物産の店<br></br>「とれたの」
      </h1>
      <hr></hr>
      <p className={accessStyles.time1}>営業時間</p>
      <p className={accessStyles.time2}>
        月～土曜日　10：00～18：30　　 / 　　日曜日　　　10：00～16：30
      </p>
      <p className={accessStyles.time2_mobile}>
        月～土曜日　10：00～18：30<br></br>日曜日　　　10：00～16：30
      </p>
      <p className={accessStyles.time3}>現在、日曜休業中!</p>
      <p className={accessStyles.time3_mobile}>現在、日曜休業中!</p>
      <hr></hr>
      <p className={accessStyles.address1}>住所</p>
      <p className={accessStyles.address2}>
        〒186-0003<br></br>
        東京都国立市富士見台1丁目7番地富士見台団地1-1-103
      </p>
      <p className={accessStyles.address2_mobile}>
        〒186-0003<br></br>
        東京都国立市富士見台1丁目7番地<br></br>富士見台団地1-1-103
      </p>
      <hr></hr>
      <p className={accessStyles.station1}>アクセス</p>
      <p className={accessStyles.station2}>JR南武線『谷保』駅北口　徒歩５分</p>
      <p className={accessStyles.station2_mobile}>
        JR南武線『谷保』駅北口　徒歩５分
      </p>
      <hr></hr>

      <img
        className={accessStyles.map}
        src="/static/253cabec8aacd6b60dad3910f1cba3a8/map.jpg"
        alt=""
      />
    </div>
  )
}

export default Access
