import React from "react"

//Components
import Layout from "../../../components/layout"
import EditJournal from "../../../components/EditJournal"

const EditJournalPage = ({ location }) => {
  const journal = location.state.journal
  //console.log(journal)

  return (
    <div className="atls">
      <Layout>
        <div className="page">
          <EditJournal journal={journal} />
        </div>
      </Layout>
    </div>
  )
}

export default EditJournalPage
