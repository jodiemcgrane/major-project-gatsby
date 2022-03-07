import React from "react"

//Components
import CreateJournal from "../../components/CreateJournal"

//Hooks
import useAuth from "../../hooks/useAuth"

const CreateJournalPage = ({ location }) => {
  const assignment = location.state.assignment
  //console.log(location.state.assignment)

  const { state } = useAuth()

  return (
    <div className="row rich-text-display">
      <div className="col-md-6">
        <CreateJournal state={state} />
      </div>
    </div>
  )
}

export default CreateJournalPage
