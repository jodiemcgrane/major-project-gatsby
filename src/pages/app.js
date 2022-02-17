import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { Router } from "@reach/router"

//Components
import Layout from "../components/layout"
import Home from "../components/app/Home"
import Assignments from "../components/app/Assignments"
import Journals from "../components/app/Journals"

import useAuth from "../hooks/useAuth"

const App = ({ location }) => {
  const { state, isAuthenticated } = useAuth()
  const redirect = location.pathname.split("/").pop()
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/", { state: { redirect } })
    }
  }, [isAuthenticated, redirect])

  return (
    <Layout>
      <Router basepath="/app" className="page">
        <Assignments path="/assignments" />
        <Assignments path="/journals" />
        <Home default />
      </Router>
    </Layout>
  )
}
export default App
