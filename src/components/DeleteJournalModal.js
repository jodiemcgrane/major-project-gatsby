import React from "react"
import { navigate } from "gatsby"

import axios from "axios"

//Atlas Components
import {
  Typography,
  ButtonGroup,
  Button,
  Modal,
  TrashIcon,
} from "@atlas-design-system/react"

const DeleteJournalModal = ({ journal, open, handleClose }) => {
  //Delete Journal
  const submitDelete = () => {
    axios
      .delete(
        `https://internport-api.herokuapp.com/journals/${journal.strapiId}`
      )
      .then(response => {
        console.log(response.data)
        navigate(`/app/journals`)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Modal
        hidden={open}
        onDismiss={handleClose}
        actionButtons={
          <div className="modal-buttons">
            <ButtonGroup align="right">
              <Button
                appearance="primary"
                onClick={() => {
                  submitDelete()
                  handleClose()
                }}
              >
                Confirm
              </Button>
              <Button appearance="secondary" onClick={handleClose}>
                Cancel
              </Button>
            </ButtonGroup>
          </div>
        }
        title="Delete Journal"
        size="small"
      >
        <div className="modal-spacing">
          <div className="row text-display">
            <TrashIcon width="125" />
          </div>

          <div className="row text-display">
            <div className="col-md-6 modal-heading">
              <Typography variant="displayText2">Delete journal?</Typography>
            </div>
          </div>

          <div className="row text-display">
            <div className="col-md-6 modal-subheading">
              <Typography variant="displayText5">
                Are you sure you want to permanently delete "{journal.title}"
                journal.
              </Typography>
            </div>
          </div>

          <div className="row text-display">
            <div className="col-md-6">
              <Typography variant="contentText1">
                You can't undo this action.
              </Typography>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default DeleteJournalModal
