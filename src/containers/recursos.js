import React, { Component } from "react"

import SEO from "../components/seo"
import RecursosComponent from "../components/recursos/index"

class RecursosContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <SEO
          lang="es"
          title="Integridad Corporativa 500"
          keywords={["ic500"]}
          description="Integridad Corporativa 500"
        />
        <RecursosComponent />
      </React.Fragment>
    )
  }
}

export default RecursosContainer
