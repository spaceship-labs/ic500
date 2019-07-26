import React, { Component } from "react"
import {
  Section,
  Container,
  TitleBar,
  Title,
  TextWrapper,
} from "../theme/index.styled"
import SEO from "../components/seo"

class MetodologiaContainer extends Component {
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
        <TitleBar>
          <Title className="wow fadeInUp" style={{ visibility: "hidden" }}>
            {this.props.data.data.title.text}
          </Title>
        </TitleBar>
        <Section>
          <Container>
            <TextWrapper
              className="wow fadeInUp"
              style={{ visibility: "hidden" }}
              dangerouslySetInnerHTML={{
                __html: this.props.data.data.content.html,
              }}
            />
          </Container>
        </Section>
      </React.Fragment>
    )
  }
}

export default MetodologiaContainer
