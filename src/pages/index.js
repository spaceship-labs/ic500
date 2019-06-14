import React from "react"
import Layout from "../layouts/index"
import HomeContainer from "../containers/home"

const IndexPage = ({ data }) => {
  return (
    <Layout section="home">
      <HomeContainer />
    </Layout>
  )
}

export default IndexPage
