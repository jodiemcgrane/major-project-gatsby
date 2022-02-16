import { Link } from "gatsby"
import React from "react"

const JournalsList = ({ journals = [] }) => {
  return (
    <div>
      {journals.map(journal => {
        return (
          <Link key={journal.id} to="/">
            <h5>{journal.title}</h5>
          </Link>
        )
      })}
    </div>
  )
}

export default JournalsList
