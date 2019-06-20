import React from "react"
import Layout from "../layouts/index"
import GlosarioContainer from "../containers/glosario"

const GlosarioPage = ({ data }) => {
  return (
    <Layout section="glosario">
      <GlosarioContainer />
    </Layout>
  )
}

export default GlosarioPage
