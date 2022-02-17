import React from "react"
import LoginForm from "../components/LoginForm"

import Layout from "../components/layout"

const LoginPage = ({ location }) => {
  const { state: routeState } = location
  const redirect = !routeState
    ? "/app"
    : routeState.redirect === "app"
    ? "/app"
    : `/app/${routeState.redirect}`

  return (
    <Layout>
      <h1>Login</h1>
      <p>Please use your credentials to login</p>
      <div>
        <LoginForm redirect={redirect} />
      </div>
    </Layout>
  )
}

export default LoginPage
