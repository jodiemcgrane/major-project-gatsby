import React from "react"
import { Link } from "gatsby"

//Hooks
import useAuth from "../hooks/useAuth"

//Components
import {
  Header,
  Button,
  ArrowDownIcon,
  Dropdown,
} from "@atlas-design-system/react"

const Navbar = () => {
  const { logout, isAuthenticated } = useAuth()

  const handleLogout = e => {
    e.preventDefault()
    logout()
  }

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
        <>
          {isAuthenticated ? (
            <Button onClick={handleLogout} appearance="secondaryReverse">
              Logout
            </Button>
          ) : null}
        </>
      }
    />
  )
}

export default Navbar
