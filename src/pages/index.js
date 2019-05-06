// @ts-nocheck
import React from "react"
import { MdLocalPhone, MdMailOutline } from "react-icons/md"
import { FaFacebook, FaInstagram } from "react-icons/fa"

import SEO from "../components/seo"
import LogotypeMobile from "../components/logotype-mobile"
import LogoMobile from "../components/logo-mobile"
import LogotypeDesktop from "../components/logotype-desktop"
import GlobalStyles from "../components/global-styles"
import { space, fontSizes, mediaQueries, colours } from "../utils/tokens"

const IndexPage = () => (
  <>
    <GlobalStyles />
    <SEO title="Holding Page" />
    <LogotypeMobile />
    <LogotypeDesktop />
    <div
      css={{
        padding: `0 ${space.lg}`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
      }}
    >
      <h1
        css={{
          fontSize: fontSizes.lg,
          marginBottom: `${space.lg}`,
          textAlign: `center`,
          [mediaQueries.sm]: {
            fontSize: fontSizes.xl,
          },
        }}
      >
        Our new website is currently being built
      </h1>
      <p
        css={{
          fontSize: fontSizes.sm,
          marginBottom: space.lg,
          textAlign: `center`,
          [mediaQueries.sm]: {
            fontSize: fontSizes.md,
            maxWidth: `45ch`,
            textAlign: `left`,
          },
        }}
      >
        We're a family run marquee hire business based near Llangollen,
        providing marquees, furniture and equipment for all outdoor events
        across North Wales, Mid Wales and Shropshire.
      </p>
    </div>
    <div
      css={{
        display: `flex`,
        alignItems: `flex-start`,
        justifyContent: `center`,
        marginBottom: space.sm,
        [mediaQueries.sm]: {
          marginBottom: space.md,
        },
      }}
    >
      <MdLocalPhone size={24} />
      <p
        css={{
          fontSize: fontSizes.sm,
          marginLeft: space.sm,
          [mediaQueries.sm]: {
            fontSize: fontSizes.md,
          },
        }}
      >
        07813 703 936
      </p>
    </div>
    <div
      css={{
        display: `flex`,
        alignItems: `flex-start`,
        justifyContent: `center`,
        marginBottom: space.md,
        [mediaQueries.sm]: {
          marginBottom: space.lg,
        },
      }}
    >
      <MdMailOutline size={24} />
      <p
        css={{
          fontSize: fontSizes.sm,
          marginLeft: space.md,
          [mediaQueries.sm]: {
            fontSize: fontSizes.md,
          },
        }}
      >
        info@muddybootsmarquees.com
      </p>
    </div>
    <div
      css={{
        display: `flex`,
        justifyContent: `center`,
        marginBottom: space.lg,
      }}
    >
      <a
        href="https://www.facebook.com/MuddyBootsMarquees/"
        css={{
          color: colours.text,
        }}
      >
        <FaFacebook
          size={24}
          css={{
            marginRight: space.sm,
          }}
        />
      </a>
      <a
        href="https://www.instagram.com/muddybootsmarquees/"
        css={{
          color: colours.text,
        }}
      >
        <FaInstagram size={24} />
      </a>
    </div>
    <LogoMobile />
  </>
)

export default IndexPage
