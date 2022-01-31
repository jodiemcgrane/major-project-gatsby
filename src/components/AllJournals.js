import { graphql, useStaticQuery } from "gatsby"
import React from "react"

//Components
import JournalList from "./JournalList"

const query = graphql`
  {
    allStrapiJournal {
      nodes {
        title
        text
        assignment {
          title
        }
        user {
          username
        }
      }
    }
  }
`

const AllJournals = () => {
  const data = useStaticQuery(query)
  const journals = data.allStrapiJournal.nodes

  //console.log(journals)

  return (
    <section>
      <JournalList journals={journals} />
    </section>
  )
}

export default AllJournals
