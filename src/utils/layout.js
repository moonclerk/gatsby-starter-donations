/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Footer from "@molecules/footer"
import Navigation from "@molecules/navigation"
import theme from "@utils/theme"
import "@utils/variables.css"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {color: ${props => props.theme.colors.black}}
  
  p {color: ${props => props.theme.colors.gray} }

  @media (min-width: 480px) {
    html {
      font-size: 90%; 
    }
  }
  @media (min-width: 600px) {
    html {
      font-size: 100%; 
    }
  }
  @media (min-width: 800px) {
    html {
      font-size: 125%;
    }
  }

  body {
    max-width: 2000px;
    margin: 0 auto;
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
