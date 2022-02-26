import React from "react"
import { Link } from "gatsby"

//Components
import { Header } from "@atlas-design-system/react"

const Navbar = () => {
  return (
    <Header
      leftNavigation={
        <>
          <Link style={{ textDecoration: "none", color: "#F7E4CB" }} to="/app">
            Home
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#F7E4CB" }}
            to="/app/assignments"
          >
            Assignments
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#F7E4CB" }}
            to="/app/journals"
          >
            Journals
          </Link>
        </>
      }
      rightNavigation={
        <Link
          style={{ textDecoration: "none", color: "#F7E4CB" }}
          to="/app"
        >
          Resources
        </Link>
      }
    />
  )
}

export default Navbar
