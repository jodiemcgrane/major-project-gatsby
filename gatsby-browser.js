import { Toaster } from "@atlas-design-system/react"
const React = require("react")
export { wrapRootElement } from "./src/hooks/useAuth"

export const wrapPageElement = ({ element }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <>
      {element}
      <Toaster />
    </>
  )
}
