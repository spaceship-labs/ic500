import React from "react"
import Layout from "../layouts/index"
import MetodologiaContainer from "../containers/metodologia"

const PoliticasPage = ({ data }) => {
  return (
    <Layout section="politicas-privacidad">
      <MetodologiaContainer data={data.prismicPoliticasPrivacidad} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PoliticasPageQuery {
    prismicPoliticasPrivacidad {
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

export default PoliticasPage
