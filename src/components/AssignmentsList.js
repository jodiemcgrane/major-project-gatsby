import { Link } from "gatsby"
import React from "react"

const AssignmentsList = ({ assignments = [] }) => {
  return <div>
      {assignments.map(assignment => {
          return (
              <Link key={assignment.id} to='/'>
                  <h5>{assignment.title}</h5>
              </Link>
          )
      })}
  </div>
}

export default AssignmentsList
