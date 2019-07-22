import React, { Component } from "react"
import SEO from "../components/seo"
import GlosarioComponent from "../components/glosario/index"

class GlosarioContainer extends Component {
  componentDidMount() {
    if (typeof window !== `undefined`) {
      const WOW = require("wowjs")
      new WOW.WOW({
        live: false,
      }).init()
    }
  }
  render() {
    return (
      <React.Fragment>
        <SEO
          lang="es"
          title="Integridad Corporativa 500"
          keywords={["ic500"]}
          description="Integridad Corporativa 500"
        />
        <GlosarioComponent data={this.props.data.data} />
      </React.Fragment>
    )
  }
}

export default GlosarioContainer
