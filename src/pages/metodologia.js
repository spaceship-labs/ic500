import React from "react"
import Layout from "../layouts/index"
import MetodologiaContainer from "../containers/metodologia"

const MetodologiaPage = ({ data }) => {
  return (
    <Layout section="metodologia">
      <MetodologiaContainer data={data.prismicMetodologia} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MetodologiaPageQuery {
    prismicMetodologia {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`

export default MetodologiaPage
