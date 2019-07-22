import React, { Component } from "react"

import SEO from "../components/seo"
import BannerComponent from "../components/home/banner"
import ContentComponent from "../components/home/content"
import ChartsComponent from "../components/home/charts"
import PopupComponent from "../components/popup/index"

class HomeContainer extends Component {
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
        <BannerComponent data={this.props.data} db={this.props.db} />
        <ContentComponent data={this.props.data} db={this.props.db} />
        <ChartsComponent data={this.props.data} />
        <PopupComponent content={this.props.db.popup_content} />
      </React.Fragment>
    )
  }
}

export default HomeContainer
