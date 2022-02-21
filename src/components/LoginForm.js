import React, { useState } from "react"
import { navigate } from "gatsby"
import { Link } from "gatsby"

//Hooks
import useAuth from "../hooks/useAuth"

//Components
import {
  FormControl,
  Input,
  Button,
  Typography,
} from "@atlas-design-system/react"

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
    <div>
      <div className="row login-header">
        <Typography variant="displayText3">Login</Typography>
      </div>

      <div className="row login-text">
        <Typography variant="displayText7">
          Please log in with your credentials.
        </Typography>
      </div>

      <FormControl label="Email">
        <Input name="identifier" onChange={handleForm} />
      </FormControl>

      <div className="login-input">
        <FormControl label="Password">
          <Input type="password" name="password" onChange={handleForm} />
        </FormControl>
      </div>

      <div className="row login-button">
        <Button
          appearance="primary"
          size="large"
          type="submit"
          onClick={submitForm}
        >
          Login
        </Button>
      </div>

      <div className="row">
        <Link to="/">
          <Typography variant="bodyContent1">Forgot your password?</Typography>
        </Link>
      </div>
    </div>
  )
}

export default LoginForm
