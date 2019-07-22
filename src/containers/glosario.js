import React, { Component } from "react"
import SEO from "../components/seo"
import GlosarioComponent from "../components/glosario/index"
import WOW from "wowjs"

class GlosarioContainer extends Component {
  componentDidMount() {
    if (typeof window !== `undefined`) {
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
