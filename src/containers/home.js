import React, { Component } from "react"

import SEO from "../components/seo"
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
            </React.Fragment>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default HomeContainer
