import React, { Component } from "react"

import SEO from "../components/seo"
import BannerComponent from "../components/cuestionario/banner"
import ContentComponent from "../components/cuestionario/content"
import CuestionarioComponent from "../components/cuestionario/index"

class CuestionarioContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <SEO
          lang="es"
          title="Integridad Corporativa 500"
          keywords={["ic500"]}
          description="Integridad Corporativa 500"
        />
        <BannerComponent />
        <ContentComponent />
        <CuestionarioComponent />
      </React.Fragment>
    )
  }
}

export default CuestionarioContainer
