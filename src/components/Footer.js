import React from "react"

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
        <a href="#">Home</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
          <a href="#">Terms and Conditions</a>
        </Footer.Menu>
        <Footer.Menu title="Header 2">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </Footer.Menu>
        <Footer.Menu title="Header 3">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </Footer.Menu>
      </React.Fragment>
    </Footer>
  )
}

export default FooterBottom
