import React from "react"
import { Global } from "@emotion/core"

import { fonts, colours } from "../utils/tokens"

const GlobalStyles = () => (
  <Global
    styles={{
      "html,body": {
        margin: 0,
        padding: 0,
        boxSizing: `border-box`,
        backgroundColor: colours.background,
        fontFamily: fonts.body,
        color: colours.text,
        msTextSizeAdjust: `100%`,
        webkitTextSizeAdjust: `100%`,
        webkitFontSmoothing: `antialiased`,
        mozOsxFontSmoothing: `grayscale`,
      },
      "*, *::before, *::after": {
        boxSizing: `inherit`,
        margin: 0,
        padding: 0,
      },
    }}
  />
)

export default GlobalStyles
