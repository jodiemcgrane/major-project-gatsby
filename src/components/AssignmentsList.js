import { Link } from "gatsby"
import React from "react"

const AssignmentsList = ({ assignments = [] }) => {
  return <div>
      {assignments.map(assignment => {
          return (
              <div key={assignment.id}>
                  <h3>{assignment.title}</h3>
                  <p>{assignment.dueDate}</p>
                  <p>{assignment.information}</p>
              </div>
          )
      })}
  </div>
}

export default AssignmentsList
