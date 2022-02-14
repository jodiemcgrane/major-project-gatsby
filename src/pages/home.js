import React from "react"

//Layout Component
import Layout from "../components/Layout"
import onAuthenticated from "../components/Layout"
import authenticated from "../components/Layout"

export default function Home() {
  return <Layout onAuthenticated={onAuthenticated} authenticated={authenticated}>
    <h1>Home page</h1>
  </Layout>
}
