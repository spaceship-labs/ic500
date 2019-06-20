import React from "react"
import Layout from "../layouts/index"
import RecursosContainer from "../containers/recursos"

const RecursosPage = ({ data }) => {
  return (
    <Layout section="recursos">
      <RecursosContainer data={data.prismicRecursos} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query RecursosPageQuery {
    prismicRecursos {
      uid
      data {
        title {
          text
        }
        content_black {
          html
        }
        content_white {
          html
        }
        resources {
          cover {
            url
          }
          resource_title {
            text
          }
          resource_url {
            url
          }
        }
      }
    }
  }
`

export default RecursosPage
