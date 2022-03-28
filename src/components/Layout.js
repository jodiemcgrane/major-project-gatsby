import React from "react"

//Components
import Navbar from "./Navbar"
import Footer from "./Footer"

//CSS
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
