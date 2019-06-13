import React from "react"
import Layout from "../layouts/index"
import { Context, ContextEn } from "../languages/context"
import HomeContainer from "../containers/home"

const IndexPage = ({ data }) => {
  return (
    <Context.Provider value={ContextEn}>
      <Layout>
        <HomeContainer />
      </Layout>
    </Context.Provider>
  )
}

export default IndexPage
