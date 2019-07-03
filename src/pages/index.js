import React from "react"
import Layout from "../layouts/index"
import HomeContainer from "../containers/home"

const IndexPage = ({ data }) => {
  return (
    <Layout section="home">
      <HomeContainer data={data.prismicHome.data} db={data.prismicComun.data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    prismicHome {
      uid
      data {
        title {
          text
        }
        subtitle {
          text
        }
        content_1 {
          html
        }
        content_2 {
          html
        }
        body {
          __typename
          ... on PrismicHomeBodyGraficasDeValores {
            slice_type
            items {
              year {
                text
              }
              values {
                text
              }
            }
            primary {
              chart_title {
                text
              }
              axis_x {
                text
              }
              axis_y {
                text
              }
            }
          }
          ... on PrismicHomeBodyGraficasDePreguntas {
            slice_type
            items {
              section {
                text
              }
              values {
                text
              }
            }
            primary {
              chart_title {
                text
              }
              axis_x {
                text
              }
              axis_y {
                text
              }
            }
          }
        }
      }
    }
    prismicComun {
      data {
        database {
          url
        }
        popup_content {
          html
        }
      }
    }
  }
`

export default IndexPage
