import React from "react"
import Layout from "../layouts/index"
import GlosarioContainer from "../containers/glosario"

const GlosarioPage = ({ data }) => {
  return (
    <Layout section="glosario">
      <GlosarioContainer data={data.prismicGlosario} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query GlosarioPageQuery {
    prismicGlosario {
      uid
      data {
        title {
          text
        }
        words {
          word {
            text
          }
          word_content {
            html
          }
        }
      }
    }
  }
`

export default GlosarioPage
