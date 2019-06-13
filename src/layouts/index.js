/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"

import { Wrapper, Content } from "../theme/index.styled"
import HeaderComponent from "../components/header/index"
import FooterComponent from "../components/footer/index"
import "../theme/layout.css"
import "../theme/style.css"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        return (
          <ThemeProvider theme={Theme}>
            <Wrapper>
              <HeaderComponent siteTitle={data.site.siteMetadata.title} />
              <Content>
                {children}
                <FooterComponent />
              </Content>
            </Wrapper>
          </ThemeProvider>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
