import React from "react"
import Layout from "../layouts/index"
import AboutContainer from "../containers/about"

const AboutPage = ({ data }) => {
  return (
    <Layout section="about">
      <AboutContainer data={data.prismicQuienesSomos} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutPageQuery {
    prismicQuienesSomos {
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

export default AboutPage
