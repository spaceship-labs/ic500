import React, { Component } from "react"
import { BannerTextBox, BannerImg } from "./index.styled"
import { Section, Container, Rows, Row, Button } from "../../theme/index.styled"
import img from "../../theme/images/ImgBanner.png"

class BannerComponent extends Component {
  render() {
    return (
      <Section color="Black">
        <Container size="large">
          <Rows align="space-between">
            <Row width="55%">
              <BannerTextBox>
                <h2>
                  No hay experiencia exitosa en la lucha contra la corrupción y
                  la impunidad que no haya tenido la participación del sector
                  privado.
                </h2>
                <p>
                  Sin un compromiso de las empresas equivalente al que se les
                  exige a las autoridades, la corrupción no podrá ser
                  disminuida. A través de IC500, Mexicanos Contra la Corrupción
                  y la Impunidad y Transparencia Mexicana buscan llamar al
                  sector privado a tomar un rol activo y sumarse a la
                  iniciativa.
                </p>
                <Rows align="space-between">
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
