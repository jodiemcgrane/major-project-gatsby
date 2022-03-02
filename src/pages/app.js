import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { Router } from "@reach/router"

//Components
import Layout from "../components/layout"
import Home from "../components/app/Home"
import AssignmentsPage from "../components/app/AssignmentsPage"
import JournalsPage from "../components/app/JournalsPage"
import SingleAssignmentPage from "../components/app/SingleAssignmentPage"

//Hooks
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
    <div className="atls">
      <Layout>
        <Router basepath="/app">
          <Home default state={state} />
          <AssignmentsPage path="/assignments" className="page" />
          <SingleAssignmentPage path="/:slug" className="page" />
          <JournalsPage path="/journals" className="page" />
        </Router>
      </Layout>
    </div>
  )
}
export default App
