import React from "react"

//Atlas Components
import {
  Typography,
  ButtonGroup,
  Button,
  Modal,
} from "@atlas-design-system/react"

const DeleteJournalModal = ({ journal, open, handleClose }) => {
    console.log(open)
  return (
    <>
      <Modal
        hidden={open}
        onDismiss={handleClose}
        actionButtons={
          <ButtonGroup align="right">
            <Button appearance="primary">Primary</Button>
            <Button appearance="secondary">Secondary</Button>
          </ButtonGroup>
        }
      >
        Hello Modal
      </Modal>
    </>
  )
}

export default DeleteJournalModal
