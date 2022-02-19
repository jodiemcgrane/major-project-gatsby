import React from "react"
import LoginForm from "../components/LoginForm"

//import Layout from "../components/layout"

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
        <p>hello</p>
      </div>
      <div className="col-md-6">
        <LoginForm redirect={redirect} />
      </div>
    </div>
  )
}

export default WelcomePage
