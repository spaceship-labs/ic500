import React from "react"
import Layout from "../layouts/index"
import { Context, ContextEn } from "../languages/context"

const IndexPage = ({ data }) => {
  return (
    <Context.Provider value={ContextEn}>
      <Layout langKey="en"></Layout>
    </Context.Provider>
  )
}

export default IndexPage
