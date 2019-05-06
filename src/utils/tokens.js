const space = {
  xs: `4px`,
  sm: `8px`,
  md: `16px`,
  lg: `32px`,
  xl: `64px`,
  xxl: `128px`,
  xxxl: `256px`,
}

const colours = {
  background: "#ffd43b",
  text: `#303030`,
}

const fonts = {
  body: "Overpass, sans-serif",
}

const fontSizes = {
  sm: `1rem`,
  md: `1.25rem`,
  lg: `1.5rem`,
  xl: `2rem`,
  xxl: `2.5rem`,
}

const breakpoints = {
  sm: `600px`,
  md: `900px`,
  lg: `1200px`,
}

const mediaQueries = Object.keys(breakpoints).reduce((prev, breakpoint) => {
  prev[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]})`
  return prev
}, {})

export { breakpoints, mediaQueries, colours, fonts, space, fontSizes }
