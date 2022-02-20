import React from "react"

//Components
import Journal from "./Journal"

const Journals = ({ journals }) => {
  return (
    <div>
      {journals.map((journal, index) => {
        return <Journal key={journal.id} index={index} {...journal} />
      })}
    </div>
  )
}

export default Journals