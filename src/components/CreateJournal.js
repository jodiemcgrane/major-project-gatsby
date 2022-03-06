import React, { useState } from "react"
import { navigate } from "gatsby"

//Axios
import axios from "axios"

//React Quill
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

//Atlas Components
import { Input, Button } from "@atlas-design-system/react"

const CreateJournal = () => {

  //Create Journal Code
  const [title, setTitle] = useState("")
  const [about, setAbout] = useState("")
  const [text, setText] = useState("")

  const submitForm = e => {
    e.preventDefault()
    const form = { title, about, text }
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
      <Input
        placeholder="Journal Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Input
        placeholder="Joural About"
        value={about}
        onChange={e => setAbout(e.target.value)}
      />
      <ReactQuill
        theme="snow"
        value={text}
        onChange={setText}
      />
      <Button appearance="primary" onClick={submitForm}>
        Submit
      </Button>
    </>
  )
}

export default CreateJournal
