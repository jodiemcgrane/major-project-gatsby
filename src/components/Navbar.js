import React from "react"
import { Link } from "gatsby"

//Components
import { Header, Button } from "@atlas-design-system/react"

const Navbar = () => {
  return (
    <Header
      rightNavigation={
        <>
          <Button component={Link} to="/">Home</Button>
        </>
      }
    />
  )
}

export default Navbar
