import React from "react"

//Components
import Journal from "./Journal"

const Journals = ({ journals }) => {
  return (
    <>
      {journals.map((journal, index) => {
        return <Journal key={journal.id} index={index} {...journal} />
      })}
    </>
  )
}

export default Journals