import React, { Component } from "react"
import { TextWrapper } from "./index.styled"
import { Section, Container } from "../../theme/index.styled"
import img from "../../theme/images/test2.png"
import arrow from "../../theme/images/arrow1.png"

class ContentComponent extends Component {
  render() {
    const { content } = this.props.data
    return (
      <Section color="LGray">
        <Container size="large">
          <TextWrapper>
            <p>
              <img alt="IC500" src={img} />
            </p>
            <div dangerouslySetInnerHTML={{ __html: content.html }} />
            <p>
              <img alt="IC500" src={arrow} />
            </p>
          </TextWrapper>
        </Container>
      </Section>
    )
  }
}

export default ContentComponent
