const tokens = {
  breakpoints: [],
  mediaQueries: [],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [0, 12, 14, 16, 18, 24, 32, 48, 64, 72],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em",
  },
  fonts: {
    body: "Overpass, sans-serif",
  },
  heights: [0, 16, 24, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    primary: "#ffd43b",
    text: `#551400`,
  },
}

const breakpoints = {
  xs: `400px`,
  sm: `550px`,
  md: `750px`,
  lg: `1000px`,
  xl: `1200px`,
  xxl: `1600px`,
}

for (let breakpoint in breakpoints) {
  tokens.mediaQueries[breakpoint] = `@media (min-width: ${
    breakpoints[breakpoint]
  })`
  tokens.breakpoints.push(breakpoints[breakpoint])
}

export default tokens
