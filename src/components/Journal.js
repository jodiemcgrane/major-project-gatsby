import React from "react"

const Journal = ({ id, title, text, published_at, user, assignment }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{text}</p>
      <p>{assignment.title}</p>
    </div>
  )
}

export default Journal
