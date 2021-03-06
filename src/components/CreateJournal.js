import React, { useState } from "react"
import { Link } from "gatsby"
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

const CreateJournal = ({ assignment, state }) => {
  //Create journal code
  const [title, setTitle] = useState("")
  const [about, setAbout] = useState("")
  const [text, setText] = useState("")
  const assignmentId = assignment.strapiId
  const userId = state.user.id
  const slug = assignment.slug

  // const saveForm = e => {
  //   e.preventDefault()
  //   const form = {
  //     title,
  //     about,
  //     text,
  //     assignment: { id: assignmentId },
  //     user: { id: userId },
  //   }
  //   //console.log(form)
  //   toast.promise(
  //     axios
  //       .post("https://internport-api.herokuapp.com/journals", form)
  //       .then(response => {
  //         console.log(response.data)
  //         fetch("http://localhost:8000/___graphql")
  //         navigate(`/app/journals`)
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       }),
  //     {
  //       loading: "Saving journal...",
  //       success: "Journal saved!",
  //       error: "Failed to save journal.",
  //     }
  //   )
  // }

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
    toast.promise(
      axios
        .post("https://internport-api.herokuapp.com/journals", form)
        .then(response => {
          console.log(response.data)
          //Refresh GEt journals request
          //fetch("http://localhost:8000/___graphql", { method: "GET" })
          navigate(`/app/journals`)
        })
        .catch(err => console.log(err)),
      {
        loading: "Submitting journal...",
        success: "Journal submitted!",
        error: "Failed to submit journal.",
      }
    )
  }

  //End of create journal code

  //Rich text edtior UI
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
        {/* <Button appearance="primary" size="large" onClick={saveForm}>
          Save
        </Button> */}
        <Button appearance="primary" size="large" onClick={submitForm}>
          Submit
        </Button>
        <Link to={`/assignments/${slug}`} style={{ textDecoration: "none" }}>
          <Button appearance="secondary" size="large">
            Cancel
          </Button>
        </Link>
      </ButtonGroup>
    </>
  )
}

export default CreateJournal
