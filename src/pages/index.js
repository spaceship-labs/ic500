import React from "react"
import Layout from "../layouts/index"
import HomeContainer from "../containers/home"

const IndexPage = ({ data }) => {
  return (
    <Layout section="home">
      <HomeContainer data={data.prismicHome.data} />
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
          slice_type
          __typename
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
  }
`

export default IndexPage
