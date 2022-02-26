import React from "react"

//Components
import Assignment from "./Assignment"

//Atlas Components

const Assignments = ({ assignments }) => {
  return (
    <div className="row assignment-row">



      {assignments.map((assignment, index) => {
        return <Assignment key={assignment.id} index={index} {...assignment} />
      })}
    </div>
  )
}

export default Assignments
