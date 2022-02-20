import React from "react"

const JournalsList = ({ journals }) => {
  return (
    <div>
      {journals.map(journal => {
        return (
          <div key={journal.id}>
            <h3>{journal.title}</h3>
            <p>{journal.text}</p>
            <p>Written by {journal.user.username}</p>
            <p>Assignment: {journal.assignment.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default JournalsList
