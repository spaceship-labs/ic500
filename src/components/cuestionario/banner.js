import React, { Component } from "react"
import { BannerTextBox, BannerImg } from "./index.styled"
import { Section, Container, Rows, Row } from "../../theme/index.styled"
import img from "../../theme/images/test1.png"

class BannerComponent extends Component {
  render() {
    const { title, title_content } = this.props.data
    return (
      <Section color="Black">
        <Container size="large">
          <Rows align="space-between">
            <Row width="60%" className="wow fadeInLeft">
              <BannerTextBox>
                <h2>{title.text}</h2>
                <div dangerouslySetInnerHTML={{ __html: title_content.html }} />
                <br />
              </BannerTextBox>
            </Row>
            <BannerImg className="wow fadeInRight">
              <img alt="" src={img} />
            </BannerImg>
          </Rows>
        </Container>
      </Section>
    )
  }
}

export default BannerComponent
