import React from "react"
import Layout from "../layouts/index"
import CuestionarioContainer from "../containers/cuestionario"

const CuestinoarioPage = ({ data }) => {
  return (
    <Layout section="cuestionario">
      <CuestionarioContainer />
    </Layout>
  )
}

export default CuestinoarioPage
