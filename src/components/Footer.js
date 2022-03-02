import React from "react"
import { Link } from "gatsby"

import { Footer, TravelportLogo } from "@atlas-design-system/react"

const FooterBottom = () => {
  return (
    <Footer
      className="custom-footer"
      copyright="©2020 Travelport. v4.1.20"
      logo={<TravelportLogo />}
    >
      <React.Fragment key=".0">
        <Footer.Menu>
          <Link to="/app">Home</Link>
          <Link to="/app/assignments">Assignments</Link>
          <Link to="/app/journals">Journals</Link>
          <Link to="/app">Cookies</Link>
          <Link to="/app">Terms of Service</Link>
        </Footer.Menu>
        <Footer.Menu title="Resources">
        <Link to="/app">Link 1</Link>
        <Link to="/app">Link 2</Link>
        </Footer.Menu>
      </React.Fragment>
    </Footer>
  )
}

export default FooterBottom
