import React, { Component } from "react"
import {
  Section,
  Container,
  Rows,
  TitleBar,
  Title,
  TextWrapper,
} from "../../theme/index.styled"
import RecursoComponent from "./recurso"

class RecursosComponent extends Component {
  componentDidMount() {
    if (typeof window !== `undefined`) {
      const WOW = require("wowjs")
      new WOW.WOW({
        live: false,
      }).init()
    }
  }
  render() {
    const title = this.props.data.title.text
    const resources = this.props.data.resources
    return (
      <React.Fragment>
        <TitleBar>
          <Container className="wow fadeInUp" style={{ visibility: "hidden" }}>
            <Title>{title}</Title>
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.data.content_black.html,
              }}
            />
          </Container>
        </TitleBar>
        <Section>
          <Container size="large">
            <TextWrapper
              center
              className="wow fadeInUp"
              style={{ visibility: "hidden" }}
              dangerouslySetInnerHTML={{
                __html: this.props.data.content_white.html,
              }}
            />
            <Rows wrap rowM>
              {resources.map((item, index) => (
                <RecursoComponent key={index} index={index} resource={item} />
              ))}
            </Rows>
          </Container>
        </Section>
      </React.Fragment>
    )
  }
}

export default RecursosComponent
