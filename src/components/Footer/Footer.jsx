import React from "react"
import footerStyles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={footerStyles.container}>
      <p className={footerStyles.foot}>
        くにたち野菜と地域物産のお店「とれたの」<br></br>TEL/FAX : 042-573-3444
        <br></br>E-mail: toretano@gmail.com
      </p>
      <p className={footerStyles.foot_mobile}>
        くにたち野菜と地域物産のお店「とれたの」<br></br>TEL/FAX : 042-573-3444
        <br></br>E-mail: toretano@gmail.com
      </p>
    </div>
  )
}

export default Footer
