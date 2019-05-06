// @ts-nocheck
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { space, mediaQueries } from "../utils/tokens"

const query = graphql`
  query {
    logotypeMobile: file(relativePath: { eq: "mbm-logotype-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

const LogotypeMobile = () => {
  const { logotypeMobile } = useStaticQuery(query)
  return (
    <Img
      css={{
        width: `280px`,
        margin: `${space.lg} auto`,
        [mediaQueries.sm]: {
          display: `none`,
        },
      }}
      fluid={logotypeMobile.childImageSharp.fluid}
    />
  )
}

export default LogotypeMobile
