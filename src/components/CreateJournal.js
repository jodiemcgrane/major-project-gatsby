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
  toast,
} from "@atlas-design-system/react"

const CreateJournal = ({ assignment, state, props }) => {
  //Create journal code
  const [title, setTitle] = useState("")
  const [about, setAbout] = useState("")
  const [text, setText] = useState("")
  const assignmentId = assignment.strapiId
  const userId = state.user.id

  const saveForm = e => {
    e.preventDefault()
    const form = {
      title,
      about,
      text,
      assignment: { id: assignmentId },
      user: { id: userId },
    }
    console.log(form)
    toast.promise(
      axios
        .post("https://internport-api.herokuapp.com/journals", form)
        .then(response => {
          console.log(response.data)
          //navigate(`/app/journals`)
        })
        .catch(error => {
          console.log(error)
        }),
      {
        loading: "Submitting journal...",
        success: "Journal submitted!",
        error: "Failed to submit journal.",
      }
    )
  }

  const submitForm = e => {
    e.preventDefault()
    const form = {
      title,
      about,
      text,
      submitted: true,
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

  //End of create journal code

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }, { font: [] }],
      ["bold", "italic", "underline", "blockquote", "code"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  }

  return (
    <>
      <div className="row">
        <div className="col-md-5 input-bottom">
          <FormControl label="Title">
            <Input
              placeholder="Title of your journal"
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
              placeholder="Short description about your journal"
              value={about}
              onChange={e => setAbout(e.target.value)}
            />
          </FormControl>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 rich-text-input">
          <FormControl label="Journal">
            <ReactQuill
              theme="snow"
              placeholder="Write your journal here..."
              modules={modules}
              value={text}
              onChange={setText}
            />
          </FormControl>
        </div>
      </div>

      <ButtonGroup>
        <Button appearance="primary" size="large" onClick={saveForm}>
          Save
        </Button>
        <Button appearance="secondary" size="large" onClick={submitForm}>
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
