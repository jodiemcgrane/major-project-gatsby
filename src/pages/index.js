import React from "react"

//Components
import LoginForm from "../components/LoginForm"
//import AllJournals from "../components/AllJournals"

export default function Welcome() {
  return (
    <div className="row">
      <div className="col-xs-6">
        {/* <img src="../assets/images/hero-img.jpg" /> */}
      </div>
      <div className="col-xs-6">
        <LoginForm />
      </div>
    </div>
  )
}
