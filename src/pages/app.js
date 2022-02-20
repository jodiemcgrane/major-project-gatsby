import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { Router } from "@reach/router"

//Components
import Layout from "../components/layout"
import Home from "../components/app/Home"
import AssignmentsPage from "../components/app/AssignmentsPage"
import JournalsPage from "../components/app/JournalsPage"

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
        <AssignmentsPage path="/assignments" />
        <JournalsPage path="/journals" />
        <Home default />
      </Router>
    </Layout>
  )
}
export default App
