import React from "react"
import Layout from "../layouts/index"
import CuestionarioContainer from "../containers/cuestionario"

const CuestinoarioPage = ({ data }) => {
  return (
    <Layout section="cuestionario">
      <CuestionarioContainer data={data.prismicCuestionario.data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query CuestionarioPageQuery {
    prismicCuestionario {
      data {
        title {
          text
        }
        title_content {
          html
        }
        content {
          html
        }
        title_results {
          text
        }
        results_content {
          html
        }
        questions {
          question {
            text
          }
          values {
            text
          }
        }
      }
    }
  }
`

export default CuestinoarioPage
