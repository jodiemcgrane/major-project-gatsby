import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Components
import Journals from "../Journals"

const query = graphql`
  {
    allStrapiJournal {
      nodes {
        id
        title
        text
        published_at
        user {
          id
          username
        }
        assignment {
          id
          title
          dueDate
        }
      }
    }
  }
`

const JournalsPage = () => {
  const data = useStaticQuery(query)
  const journals = data.allStrapiJournal.nodes

  return (
    <main className="page">
      <Journals journals={journals} />
    </main>
  )
}

export default JournalsPage
