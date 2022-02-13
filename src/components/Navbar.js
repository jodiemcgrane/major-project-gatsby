import React from "react"
import { Link } from "gatsby"

//Components
import { Header, Button } from "@atlas-design-system/react"

const Navbar = () => {
  return (
    <Header
      // logo={<A />}
      rightNavigation={
        <>
          <Button>Nav link</Button>
          <Button>Nav link</Button>
        </>
      }
    />
  )
}

export default Navbar
