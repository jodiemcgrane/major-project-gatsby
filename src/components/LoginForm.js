import React from "react"
import { useState } from "react"

//Components
import { FormControl, Input, Button } from "@atlas-design-system/react"

const LoginForm = () => {
  return (
    <>
      <FormControl id="myFormControl" label="Username">
        <Input id="myInput" />
      </FormControl>
      <FormControl id="myFormControl" label="Password">
        <Input id="myInput" type="password" />
      </FormControl>
      <Button
          appearance="primary"
          type="submit"
        >
          Login
        </Button>
    </>
  )
}

export default LoginForm
