import React, { Component } from "react"
import {
  Section,
  Container,
  TitleBar,
  Title,
  TextWrapper,
} from "../theme/index.styled"
import SEO from "../components/seo"
import WOW from "wowjs"

class MetodologiaContainer extends Component {
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
        <TitleBar>
          <Title className="wow fadeInUp">
            {this.props.data.data.title.text}
          </Title>
        </TitleBar>
        <Section>
          <Container>
            <TextWrapper
              className="wow fadeInUp"
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
