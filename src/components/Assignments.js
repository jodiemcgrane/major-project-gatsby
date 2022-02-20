import React from "react"

//Components
import Assignment from "./Assignment"

const Assignments = ({ assignments }) => {
  return (
    <div>
      {assignments.map((assignment, index) => {
        return <Assignment key={assignment.id} index={index} {...assignment} />
      })}
    </div>
  )
}

export default Assignments
