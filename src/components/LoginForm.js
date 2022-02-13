import React from "react"
import axios from "axios"
import { useState } from "react"

//Components
import { FormControl, Input, Button } from "@atlas-design-system/react"

const LoginForm = () => {
  const [form, setForm] = useState({})

  const handleForm = e => {
    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const submitForm = () => {
    axios
      .post("http://internport-api.herokuapp.com/auth/local", {
        identifier: form.identifier,
        password: form.password,
      })
      .then(response => {
        let token = response.data.jwt
        localStorage.setItem("Token", token)
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
