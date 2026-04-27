import React from "react"
import { NavigationProvider } from "./src/context/NavigationContext"

export const wrapRootElement = ({ element }) => {
  return <NavigationProvider>{element}</NavigationProvider>
}

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
