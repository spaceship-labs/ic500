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

const Layout = ({ section, children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
          prismicComun {
            data {
              facebook {
                url
              }
              twitter {
                url
              }
              instagram {
                url
              }
              youtube {
                url
              }
              footer_legend {
                text
              }
              database {
                url
              }
              informes {
                year {
                  text
                }
                informe {
                  url
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <ThemeProvider theme={Theme}>
            <Wrapper>
              <HeaderComponent
                section={section}
                siteTitle={data.site.siteMetadata.title}
                data={data.prismicComun.data}
              />
              <Content section={section}>
                {children}
                <FooterComponent data={data.prismicComun.data} />
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
