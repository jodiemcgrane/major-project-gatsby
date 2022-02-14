import React from "react"

//Components
import Navbar from "./Navbar"

//CSS
import "../assets/css/main.css"

const Layout = ({ children }) => {

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
