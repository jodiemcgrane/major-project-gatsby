//Component for retrieving ALL journals from GraphQL

import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const query = graphql`
  {
    allStrapiJournal {
      nodes {
        id
        title
        text
        submitted
        user {
          username
        }
        assignment {
          id
          title
        }
      }
    }
  }
`

const AllJournals = () => {
  const data = useStaticQuery(query)
  const journals = data.allStrapiJournal.nodes

  return <div></div>
}

export default AllJournals
