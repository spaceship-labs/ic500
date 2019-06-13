import React, { Component } from "react"

import SEO from "../components/seo"
import BannerComponent from "../components/home/banner"
import ContentComponent from "../components/home/content"
import ChartsComponent from "../components/home/charts"
import { Context } from "../languages/context"

class HomeContainer extends Component {
  render() {
    return (
      <Context.Consumer>
        {({ lang, texts }) => {
          return (
            <React.Fragment>
              <SEO
                lang={lang}
                title={texts.title}
                keywords={texts.keywords}
                description={texts.description}
              />
              <BannerComponent />
              <ContentComponent />
              <ChartsComponent />
            </React.Fragment>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default HomeContainer
