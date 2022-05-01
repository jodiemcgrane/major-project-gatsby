import React, { useState, useEffect } from "react"
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
  const initialValues = { identifier: "", password: "" }
  const [form, setForm] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleForm = e => {
    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const submitForm = () => {
    setFormErrors(validate(form))
    setIsSubmit(true)
    login({
      identifier: form.identifier,
      password: form.password,
    })
      .then(response => {
        console.log(response.jwt)
        console.log(state)
        navigate(redirect)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(form)
    }
  }, [formErrors])

  const validate = values => {
    const errors = {}
    if (!values.identifier) {
      errors.identifier = "Email is required"
    }
    if (!values.password) {
      errors.password = "Password is required"
    }
    return errors
  }

  return (
    <>
      <div className="row login-header">
        <Typography variant="displayText3">Log in</Typography>
      </div>

      <div className="row login-text">
        <Typography variant="displayText7">
          Please log in with your credentials.
        </Typography>
      </div>

      <FormControl label="Email">
        <Input
          name="identifier"
          onChange={handleForm}
          value={form.identifier}
        />
      </FormControl>
      <Typography className="validation-text" variant="contentText2">
        {formErrors.identifier}
      </Typography>

      <div className="login-input">
        <FormControl label="Password">
          <Input
            type="password"
            name="password"
            onChange={handleForm}
            value={form.password}
          />
        </FormControl>
        <Typography className="validation-text" variant="contentText2">
          {formErrors.password}
        </Typography>
      </div>

      <div className="row login-button">
        <Button
          appearance="primary"
          size="large"
          type="submit"
          onClick={submitForm}
        >
          Log in
        </Button>
      </div>

      <div className="row">
        <Link to="/">
          <Typography variant="bodyContent1">Forgot your password?</Typography>
        </Link>
      </div>
    </>
  )
}

export default LoginForm
