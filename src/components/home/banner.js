import React, { Component } from "react"
import { BannerTextBox, BannerImg } from "./index.styled"
import { Section, Container, Rows, Row, Button } from "../../theme/index.styled"
import img from "../../theme/images/ImgBanner.png"

class BannerComponent extends Component {
  render() {
    const { title, subtitle } = this.props.data
    return (
      <Section color="Black">
        <Container size="large">
          <Rows align="space-between">
            <Row width="55%">
              <BannerTextBox>
                <h2>{title.text}</h2>
                <p>{subtitle.text}</p>
                <Rows rowM rowS align="space-between" alignM="space-around">
                  <Button href="/en">
                    Descarga informe{" "}
                    <span>
                      2018 <i className="icon-arrow" />
                    </span>
                  </Button>
                  <Button href="/" grayButton>
                    Descarga la base de datos
                  </Button>
                </Rows>
                <br />
              </BannerTextBox>
            </Row>
            <BannerImg>
              <img alt="" src={img} />
            </BannerImg>
          </Rows>
        </Container>
      </Section>
    )
  }
}

export default BannerComponent
