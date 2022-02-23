import React from "react"
import { Link } from "gatsby"

//Components
import { Header, Button } from "@atlas-design-system/react"

const Navbar = () => {
  return (
    <Header
      rightNavigation={
        <>
          <Link style={{ textDecoration: "none", color: "#F7E4CB" }} to="/app">
            Home
          </Link>
          <Link style={{ textDecoration: "none", color: "#F7E4CB" }} to="/app/assignments">
            Assignments
          </Link>
          <Link style={{ textDecoration: "none", color: "#F7E4CB" }} to="/app/journals">
            Journals
          </Link>
        </>
      }
    />
  )
}

export default Navbar
