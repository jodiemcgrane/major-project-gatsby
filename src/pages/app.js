import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import Home from "../components/app/Home"

import useAuth from "../hooks/useAuth"

const App = ({ location }) => {
  const { state, isAuthenticated } = useAuth()
  const redirect = location.pathname.split("/").pop()
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { state: { redirect } })
    }
  }, [isAuthenticated, redirect])

  return (
    <Layout>
      <Router basepath="/app" className="page">
        <Home default />
      </Router>
    </Layout>
  )
}
export default App
