import React from "react"
import { Link } from "gatsby"

//Components
import { Header } from "@atlas-design-system/react"

const Navbar = () => {
  return (
    <Header
      rightNavigation={
        <>
          <Link style={{ textDecoration: "none" }} to="/app">
            Home
          </Link>
          <Link style={{ textDecoration: "none" }} to="/app/assignments">
            Assignments
          </Link>
          <Link style={{ textDecoration: "none" }} to="/app/journals">
            Journals
          </Link>
        </>
      }
    />
  )
}

export default Navbar
