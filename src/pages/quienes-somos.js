import React from "react"
import Layout from "../layouts/index"
import AboutContainer from "../containers/about"

const AboutPage = ({ data }) => {
  return (
    <Layout section="about">
      <AboutContainer />
    </Layout>
  )
}

export default AboutPage
