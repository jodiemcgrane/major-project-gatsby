import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Components
import FeaturedJournalCard from "../FeaturedJournalCard"
import { Typography } from "@atlas-design-system/react"

const query = graphql`
  {
    allStrapiJournal(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        about
        featured
        published_at
        user {
          username
        }
      }
    }
  }
`

const Home = () => {
  const data = useStaticQuery(query)
  const journals = data.allStrapiJournal.nodes

  return (
    <div>
      <div className="row center-xs middle-xs bg-sand featured-journals-header">
        <Typography variant="displayText3">Featured Journals</Typography>
      </div>
      <div className="row bg-sand">
        <div className="col-xs col-md-4">
          <div className="box">
            <FeaturedJournalCard journals={journals} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
