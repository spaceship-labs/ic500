import React, { Component } from "react"

import SEO from "../components/seo"
import BannerComponent from "../components/home/banner"
import ContentComponent from "../components/home/content"
import ChartsComponent from "../components/home/charts"

class HomeContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <SEO
          lang="es"
          title="Integridad Corporativa 500"
          keywords={["ic500"]}
          description="Integridad Corporativa 500"
        />
        <BannerComponent data={this.props.data} />
        <ContentComponent data={this.props.data} />
        <ChartsComponent data={this.props.data} />
      </React.Fragment>
    )
  }
}

export default HomeContainer
