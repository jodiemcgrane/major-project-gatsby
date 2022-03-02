import React from "react"
import { Link } from "gatsby"

//Components
import { Header, ArrowDownIcon, Dropdown } from "@atlas-design-system/react"

const Navbar = () => {
  return (
    <Header
      leftNavigation={
        <>
          <Link style={{ textDecoration: "none", color: "#F7E4CB" }} to="/app/home">
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
      // rightNavigation={
      //   <Dropdown content={<Link>Link 1</Link>}>
      //     <Link style={{ textDecoration: "none", color: "#F7E4CB" }} to="/app">
      //       Resources
      //     </Link>
      //   </Dropdown>
      // }
    />
  )
}

export default Navbar
