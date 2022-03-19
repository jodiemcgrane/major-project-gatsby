import React, { useEffect, useState } from "react"
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
  Checkbox,
} from "@atlas-design-system/react"

const EditJournal = ({ journal }) => {
  //Edit journal code

  //form
  const [title, setTitle] = useState("")
  const [about, setAbout] = useState("")
  const [text, setText] = useState("")

  //journal
  const [journalData, setJournalData] = useState({})

  useEffect(() => {
    axios
      .get(`https://internport-api.herokuapp.com/journals/${journal.strapiId}`)
      .then(response => {
        console.log(response.data)
        setJournalData(response.data)
        setTitle(response.data)
        setAbout(response.data)
        setText(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  if (!journal) return null

  const saveForm = e => {
    e.preventDefault()
    const form = {
      title,
      about,
      text,
    }
    console.log(form)

    axios
      .put("https://internport-api.herokuapp.com/journals", form)
      .then(response => {
        console.log(response.data)
        navigate(`/app/journals`)
      })
      .catch(err => console.log(err))
  }
  //End of edit journal code

  //React Quill modules
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
              onChange={e => setTitle(e.target.value)}
              defaultValue={journalData.title}
            />
          </FormControl>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5 input-bottom">
          <FormControl label="About">
            <Input
              onChange={e => setAbout(e.target.value)}
              defaultValue={journalData.about}
            />
          </FormControl>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 rich-text-input">
          <FormControl label="Edit Journal">
            <ReactQuill
              theme="snow"
              modules={modules}
              onChange={setText}
              defaultValue={journalData.text}
            />
          </FormControl>
        </div>
      </div>

      <ButtonGroup>
        <Button appearance="primary" size="large" onClick={saveForm}>
          Save
        </Button>
        <Button appearance="secondary" size="large">
          Cancel
        </Button>
      </ButtonGroup>
    </>
  )
}

export default EditJournal
