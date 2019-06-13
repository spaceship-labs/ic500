import React from "react"
import Layout from "../layouts/index"
import { Context, ContextEs } from "../languages/context"
import HomeContainer from "../containers/home"

const IndexEsPage = ({ data }) => {
  return (
    <Context.Provider value={ContextEs}>
      <Layout>
        <HomeContainer />
      </Layout>
    </Context.Provider>
  )
}

export default IndexEsPage
