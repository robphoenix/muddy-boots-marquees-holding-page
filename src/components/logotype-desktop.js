// @ts-nocheck
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { space, mediaQueries } from "../utils/tokens"

const query = graphql`
  query {
    logotypeDesktop: file(relativePath: { eq: "mbm-title.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

const LogotypeDesktop = () => {
  const { logotypeDesktop } = useStaticQuery(query)
  return (
    <div
      css={{
        width: `80%`,
        maxWidth: `800px`,
        margin: `${space.xl} auto`,
        display: `none`,
        [mediaQueries.sm]: {
          display: `block`,
        },
      }}
    >
      <Img fluid={logotypeDesktop.childImageSharp.fluid} />
    </div>
  )
}

export default LogotypeDesktop
