import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Components
import Journals from "../Journals"

//Atlas Components
import { Typography } from "@atlas-design-system/react"

const query = graphql`
  {
    allStrapiJournal {
      nodes {
        id
        strapiId
        title
        about
        submitted
        featured
        published_at
        user {
          username
        }
        assignment {
          id
          title
        }
      }
      totalCount
    }
  }
`

const JournalsPage = () => {
  const data = useStaticQuery(query)
  const journals = data.allStrapiJournal.nodes
  const total = data.allStrapiJournal

  return (
    <div className="page">
      <div className="row journals-page-header">
        <div className="col-md-5">
          <Typography variant="displayText4">
            Journals ({total.totalCount})
          </Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 journals-page-introduction">
          <Typography variant="displayText5">
            Literally shoreditch yr try-hard four dollar toast. Ennui man bun
            vape kickstarter ethical forage slow-carb cornhole hella occupy.
          </Typography>
        </div>
      </div>
      <div className="row journals-row">
        <div className="col-md-4 col-md-9">
          <Journals journals={journals} />
        </div>
      </div>
    </div>
  )
}

export default JournalsPage
