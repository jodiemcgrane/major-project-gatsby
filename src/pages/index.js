import React from "react"

//Images
import { StaticImage } from "gatsby-plugin-image"

//Components
import LoginForm from "../components/LoginForm"

const WelcomePage = ({ location }) => {
  const { state: routeState } = location
  const redirect = !routeState
    ? "/app"
    : routeState.redirect === "app"
    ? "/app"
    : `/app/${routeState.redirect}`

  return (
    <div className="row">
      <div className="col-md-6">
        <StaticImage src='../assets/images/hero-img.jpg' alt="Hero" />
      </div>
      <div className="col-md-6">
        <LoginForm redirect={redirect} />
      </div>
    </div>
  )
}

export default WelcomePage
