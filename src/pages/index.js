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
    <div className="atls row bg-sand">
      <div className="col-xs col-md-6">
        <div className="box">
          <StaticImage
            src="../assets/images/hero-img.jpg"
            alt="Hero"
            as="section"
            placeholder="blurred"
            layout="constrained"
          />
        </div>
      </div>
      <div className="row login-form middle-xs col-xs col-md-6">
        <div className="col-md-6">
          <div className="box">
            <div className="login-logo">
              <StaticImage
                src="../assets/images/travelport-logo.png"
                alt="Logo"
                as="section"
                placeholder="blurred"
                layout="constrained"
              />
            </div>

            <LoginForm redirect={redirect} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
