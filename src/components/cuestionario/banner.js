import React, { Component } from "react"
import { BannerTextBox, BannerImg } from "./index.styled"
import { Section, Container, Rows, Row } from "../../theme/index.styled"
import img from "../../theme/images/ImgBanner.png"

class BannerComponent extends Component {
  render() {
    return (
      <Section color="Black">
        <Container size="large">
          <Rows align="space-between">
            <Row width="60%">
              <BannerTextBox>
                <h2>
                  IC500 es un índice que mide la publicidad y la calidad de las
                  políticas de integridad y anticorrupción de las 500 empresas
                  más grandes de México.
                </h2>
                <p>
                  El índice busca empezar una conversación sobre integridad
                  corporativa en México y el rol del sector privado en la
                  estrategia anticorrupción. Esta conversación no debe de
                  quedarse en las 500 más grandes, al contrario, queremos que
                  sea un detonador dentro de empresas de otros tamaños y otros
                  sectores, y entre las personas que trabajan dentro de estas
                  mismas y quizás no se ocupan de estos temas en el día a día.
                </p>
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
