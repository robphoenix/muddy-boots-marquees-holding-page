import React from "react"
import { Global, css } from "@emotion/core"

import Image from "../components/image"
import SEO from "../components/seo"
import tokens from "../utils/tokens"

const IndexPage = () => (
  <>
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background-color: ${tokens.colors.primary};
          font-family: ${tokens.fonts.body};
          color: ${tokens.colors.text};
        }
        *,
        *::before,
        *::after {
          box-sizing: inherit;
          margin: 0;
          padding: 0;
        }
      `}
    />
    <SEO title="Holding Page" />
    <Image />
    <h1
      css={{
        fontFamily: tokens.fonts.body,
      }}
    >
      Our new website is currently being built
    </h1>
    <p>
      We're a family run marquee hire business based near Llangollen, providing
      marquees, furniture and equipment for all outdoor events across North
      Wales, Mid Wales and Shropshire
    </p>
  </>
)

export default IndexPage
