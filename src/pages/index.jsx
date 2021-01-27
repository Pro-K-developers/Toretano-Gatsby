import React from "react"
import About from "../components/About/About"
import Access from "../components/Access/Access"
import Contact from "../components/Contact/Contact"
import Feature from "../components/Feature/Feature"
import Footer from "../components/Footer/Footer"
import Goods from "../components/Goods/Goods"
import Header from "../components/Header/Header"
import Top from "../components/Top/Top"

export default function Home() {
  return (
    <>
      <Header />
      <Top />
      <About />
      <Goods />
      <Feature />
      <Access />
      <Contact />
      <Footer />
    </>
  )
}
