import React from "react"

const JournalList = ({ journals = [] }) => {
  return (
    <div>
      {journals.map(journal => {
        return (
          <div key={journal.id}>
            <h3>{journal.assignment.title}</h3>
            <h4>{journal.title}</h4>
            <p>{journal.text}</p>
            <small>Written by {journal.user.username}</small>
          </div>
        )
      })}
    </div>
  )
}

export default JournalList
