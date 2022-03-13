import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

//Components
import Layout from "../../components/Layout"

//Atlas Components
import { Typography, Button, Lozenge } from "@atlas-design-system/react"

const JournalTemplate = ({ data }) => {
  const journal = data.strapiJournal

  return (
    <div className="atls">
      <Layout>
        <div className="page">
          <div className="row between-xs middle-xs">
            <Typography variant="displayText1">{journal.title}</Typography>
            {journal.submitted ? (
              <Lozenge appearance="success" text="Submitted" />
            ) : (
              <Lozenge appearance="warning" text="Not Submitted" />
            )}
          </div>
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
