import React from "react"
import { Link } from "gatsby"

//Components
import { Header, Button } from "@atlas-design-system/react"

const Navbar = () => {
  return (
    <Header
      rightNavigation={
        <>
          <Button><Link to="/app">Dashboard</Link></Button>
          <Button><Link to="/app/home">Home</Link></Button>
        </>
      }
    />
  )
}

export default Navbar
