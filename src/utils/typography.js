import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.33,
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
  bodyWeight: 400,
  boldWeight: 600,
  headerFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
  headerLineHeight: 1,
  headerWeight: 600,
  scaleRatio: 3,
  overrideStyles: ({ adjustFontSizeTo }, options, styles) => ({
    h6: {
      ...adjustFontSizeTo("14px"),
    },
  }),
})

export default typography
