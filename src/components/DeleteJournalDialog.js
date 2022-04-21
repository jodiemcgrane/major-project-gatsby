import React from "react"
import { navigate } from "gatsby"

import axios from "axios"

//Atlas Components
import {
  Typography,
  ButtonGroup,
  Button,
  Dialog,
  toast,
} from "@atlas-design-system/react"

const DeleteJournalDialog = ({ journal, open, handleClose }) => {
  //Delete Journal
  const submitDelete = () => {
    toast.promise(
      axios
        .delete(
          `https://internport-api.herokuapp.com/journals/${journal.strapiId}`
        )
        .then(response => {
          console.log(response.data)
          navigate(`/app/journals`)
        })
        .catch(error => {
          console.log(error)
        }),
      {
        loading: "Deleting journal...",
        success: "Journal deleted!",
        error: "Failed to delete journal.",
      }
    )
  }

  return (
    <>
      <Dialog
        hidden={open}
        onDismiss={handleClose}
        buttons={
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
        appearance="error"
      >
        <div className="row">
          <div>
            <Typography variant="contenttext1">
              Are you sure you want to permanently delete "{journal.title}"
              journal?
            </Typography>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default DeleteJournalDialog
