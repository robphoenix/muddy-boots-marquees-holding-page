// @ts-nocheck
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { space, mediaQueries } from "../utils/tokens"

const query = graphql`
  query {
    logoMobile: file(relativePath: { eq: "mbm-logo-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

const LogoMobile = () => {
  const { logoMobile } = useStaticQuery(query)
  return (
    <div
      css={{
        display: `flex`,
        justifyContent: `center`,
        width: `100%`,
        marginBottom: space.lg,
      }}
    >
      <Img
        css={{
          width: `100px`,
          margin: `0 auto`,
          [mediaQueries.sm]: {
            display: `none`,
          },
        }}
        fluid={logoMobile.childImageSharp.fluid}
      />
    </div>
  )
}

export default LogoMobile
