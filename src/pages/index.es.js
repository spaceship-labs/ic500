import React from "react"
import Layout from "../layouts/index"
import { Context, ContextEs } from "../languages/context"

const IndexEsPage = ({ data }) => {
  return (
    <Context.Provider value={ContextEs}>
      <Layout langKey="es"></Layout>
    </Context.Provider>
  )
}

export default IndexEsPage
