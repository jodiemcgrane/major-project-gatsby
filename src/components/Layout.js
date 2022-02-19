import React from "react"

//Components
import Navbar from "./Navbar"
import Footer from "./Footer"

//CSS
import "../assets/css/atlas.css"

const Layout = ({ children }) => {

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
