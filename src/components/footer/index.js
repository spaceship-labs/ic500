import React, { Component } from "react"
import { Footer, Logo, SmallMenu } from "./index.styled"
import { Container, Rows, Row } from "../../theme/index.styled"
import ic from "../../theme/LogoIntegridadF.png"
import mcci from "../../theme/mcci_logo.png"
import transparencia from "../../theme/TransparenciaLogo.png"
import usaid from "../../theme/USAIDlogo.png"

class FooterComponent extends Component {
  render() {
    return (
      <Footer>
        <Container size="large">
          <Rows align="space-between">
            <Row>
              <Logo href="/">
                <img alt="IC500" src={ic} />
              </Logo>
            </Row>
            <Row>
              <Logo href="/" size="145">
                <img alt="MCCI" src={mcci} />
              </Logo>
              <Logo href="/" size="180">
                <img alt="USAID" src={usaid} />
              </Logo>
              <Logo href="/" size="180">
                <img alt="Transparencia Mexicana" src={transparencia} />
              </Logo>
              <SmallMenu>
                <li>
                  <a href="/">Aviso de privacidad</a>
                </li>
                <li>
                  <a>Copyright 2019, All right Reserved</a>
                </li>
              </SmallMenu>
            </Row>
          </Rows>
        </Container>
      </Footer>
    )
  }
}

export default FooterComponent
