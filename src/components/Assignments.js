import React from "react"

//Components
import Assignment from "./Assignment"

const Assignments = ({ assignments }) => {
  return (
    <div className="row between-xs assignment-row">
      {assignments.map((assignment, index) => {
        return <Assignment key={assignment.id} index={index} {...assignment} />
      })}
    </div>
  )
}

export default Assignments
