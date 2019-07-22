import React, { Component } from "react"
import {
  Section,
  Container,
  TitleBar,
  Title,
  TextWrapper,
} from "../theme/index.styled"
import SEO from "../components/seo"

class AboutContainer extends Component {
  componentDidMount() {
    if (typeof window !== `undefined`) {
      const WOW = require("wowjs")
      new WOW.WOW({
        live: false,
      }).init()
    }
  }
  render() {
    const data = this.props.data
    return (
      <React.Fragment>
        <SEO
          lang="es"
          title="Integridad Corporativa 500"
          keywords={["ic500"]}
          description="Integridad Corporativa 500"
        />
        <TitleBar>
          <Title className="wow fadeInUp">{data.data.title.text}</Title>
        </TitleBar>
        <Section>
          <Container>
            <TextWrapper
              className="wow fadeInUp"
              dangerouslySetInnerHTML={{ __html: data.data.content.html }}
            />
          </Container>
        </Section>
      </React.Fragment>
    )
  }
}

export default AboutContainer
