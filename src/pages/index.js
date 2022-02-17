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
    <main className="page">
      <h1>Login</h1>
      <p>Please use your credentials to login</p>
      <LoginForm redirect={redirect} />
    </main>
  )
}

export default WelcomePage
