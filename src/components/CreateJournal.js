import React, { useState } from "react"
import { navigate } from "gatsby"

//Axios
import axios from "axios"

//React Quill
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

//Atlas Components
import {
  FormControl,
  Input,
  ButtonGroup,
  Button,
} from "@atlas-design-system/react"

const CreateJournal = ({ assignment, state }) => {
  //Create Journal Code
  const [title, setTitle] = useState("")
  const [about, setAbout] = useState("")
  const [text, setText] = useState("")
  const assignmentId = assignment.strapiId
  const userId = state.user.id

  const submitForm = e => {
    e.preventDefault()
    const form = {
      title,
      about,
      text,
      assignment: { id: assignmentId },
      user: { id: userId },
    }
    console.log(form)

    axios
      .post("https://internport-api.herokuapp.com/journals", form)
      .then(response => {
        console.log(response.data)
        navigate(`/app/journals`)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className="row">
        <div className="col-md-5 input-bottom">
          <FormControl label="Title">
            <Input
              placeholder="Journal Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </FormControl>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5 input-bottom">
          <FormControl label="About">
            <Input
              placeholder="Joural About"
              value={about}
              onChange={e => setAbout(e.target.value)}
            />
          </FormControl>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 rich-text-input">
          <FormControl label="Journal">
            <ReactQuill theme="snow" value={text} onChange={setText} />
          </FormControl>
        </div>
      </div>

      <ButtonGroup>
        <Button appearance="primary" size="large" onClick={submitForm}>
          Submit
        </Button>
        <Button appearance="secondary" size="large">
          Cancel
        </Button>
      </ButtonGroup>
    </>
  )
}

export default CreateJournal
