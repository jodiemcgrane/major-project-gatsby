import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

//Components
import Layout from "../../components/Layout"

const JournalTemplate = ({ data }) => {
  const journal = data.strapiJournal
  console.log(journal)

  return (
    <div className="atls">
      <Layout>
        <div className="page">
          <h1>{journal.strapiId}</h1>
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query getSingleJournal($strapiId: Int) {
    strapiJournal(strapiId: { eq: $strapiId }) {
      id
      strapiId
      title
      about
      text
      submitted
      featured
      published_at
      assignment {
        id
        title
        slug
      }
      user {
        id
        username
      }
    }
  }
`

export default JournalTemplate
