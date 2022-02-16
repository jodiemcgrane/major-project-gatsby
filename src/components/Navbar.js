import React from "react"
import { Link } from "gatsby"

//Components
import { Header, Button } from "@atlas-design-system/react"

const Navbar = () => {
  return (
    <Header
      rightNavigation={
        <>
          <Button>Assignments</Button>
          <Button>Journals</Button>
        </>
      }
    />
  )
}

export default Navbar
