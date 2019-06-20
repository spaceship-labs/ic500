import React from "react"
import SEO from "../components/seo"
import GlosarioComponent from "../components/glosario/index"

const GlosarioContainer = ({ data }) => {
  return (
    <React.Fragment>
      <SEO
        lang="es"
        title="Integridad Corporativa 500"
        keywords={["ic500"]}
        description="Integridad Corporativa 500"
      />
      <GlosarioComponent data={data.data} />
    </React.Fragment>
  )
}

export default GlosarioContainer
