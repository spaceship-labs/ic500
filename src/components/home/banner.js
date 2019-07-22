import React, { Component } from "react"
import { BannerTextBox, BannerImg } from "./index.styled"
import { Section, Container, Rows, Row, Button } from "../../theme/index.styled"
import img from "../../theme/images/ImgBanner.png"
import DropdownComponent from "./dropdown"

class BannerComponent extends Component {
  render() {
    const { title, subtitle } = this.props.data
    return (
      <Section color="Black">
        <Container size="large">
          <Rows align="space-between">
            <Row width="55%">
              <BannerTextBox className="wow fadeInLeft">
                <h2>{title.text}</h2>
                <p>{subtitle.text}</p>
                <Rows rowM align="space-between" alignM="space-around">
                  <DropdownComponent />
                  <Button href={this.props.db.database.url} grayButton>
                    Descarga la base de datos
                  </Button>
                </Rows>
                <br />
              </BannerTextBox>
            </Row>
            <BannerImg>
              <img alt="" src={img} className="wow fadeInRight" />
            </BannerImg>
          </Rows>
        </Container>
      </Section>
    )
  }
}

export default BannerComponent
