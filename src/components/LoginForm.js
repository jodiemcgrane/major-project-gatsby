import React, { useState } from "react"
import { navigate } from "gatsby"
//import axios from "axios"

//Hooks
import useAuth from "../hooks/useAuth"

//Components
import { FormControl, Input, Button } from "@atlas-design-system/react"

const LoginForm = ({ redirect }) => {
  const { state, login } = useAuth()
  const [form, setForm] = useState({})

  const handleForm = e => {
    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const submitForm = () => {
    login({
      identifier: form.identifier,
      password: form.password,
    })
      .then(response => {
        console.log(response.jwt)
        navigate(redirect)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <FormControl id="myFormControl" label="Username">
        <Input id="myInput" name="identifier" onChange={handleForm} />
      </FormControl>
      <FormControl id="myFormControl" label="Password">
        <Input
          id="myInput"
          type="password"
          name="password"
          onChange={handleForm}
        />
      </FormControl>
      <Button appearance="primary" type="submit" onClick={submitForm}>
        Login
      </Button>
    </>
  )
}

export default LoginForm
