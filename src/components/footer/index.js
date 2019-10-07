import React, { Component } from "react"
import {
  Footer,
  Logo,
  SmallMenu,
  Social,
  Separation,
  Label,
} from "./index.styled"
import { Container, Rows, Row } from "../../theme/index.styled"
import ic from "../../theme/LogoIntegridadF.png"
import mcci from "../../theme/mcci_logo.png"
import transparencia from "../../theme/TransparenciaLogo.png"
import usaid from "../../theme/USAIDlogo.png"

class FooterComponent extends Component {
  render() {
    const {
      facebook,
      twitter,
      instagram,
      youtube,
      footer_legend,
    } = this.props.data
    return (
      <Footer>
        <Container size="large">
          <Rows align="space-between">
            <Row shrink>
              <Logo href="/" size="250">
                <img alt="IC500" src={ic} />
              </Logo>
              <Rows rowM rowS rowXs alignM="center">
                {facebook.url ? (
                  <Social href={facebook.url}>
                    <i className="icon-facebook" />
                  </Social>
                ) : (
                  ""
                )}
                {twitter.url ? (
                  <Social href={twitter.url}>
                    <i className="icon-twitter" />
                  </Social>
                ) : (
                  ""
                )}
                {youtube.url ? (
                  <Social href={youtube.url}>
                    <i className="icon-youtube" />
                  </Social>
                ) : (
                  ""
                )}
                {instagram.url ? (
                  <Social href={instagram.url}>
                    <i className="icon-instagram" />
                  </Social>
                ) : (
                  ""
                )}
              </Rows>
            </Row>
            <Row shrink>
              <Rows
                rowS
                rowM
                align="space-between"
                verticalalign="center"
                alignM="center"
                wrapM
              >
                <Logo href="/" size="160" className="wow fadeInRight">
                  <img alt="Transparencia Mexicana" src={transparencia} />
                </Logo>
                <Logo href="/" size="125" className="wow fadeInRight">
                  <img alt="MCCI" src={mcci} />
                </Logo>
                <Separation className="wow fadeInRight" hideS />
                <Logo href="/" size="300" labeled className="wow fadeInRight">
                  <span>MCCI con apoyo de:</span>
                  <img alt="USAID" src={usaid} />
                </Logo>
                <Separation className="wow fadeInRight" />
                <Label className="wow fadeInRight">
                  <p>{footer_legend.text}</p>
                </Label>
              </Rows>
              <SmallMenu>
                <li>
                  <a href="/politicas-de-privacidad">Aviso de privacidad</a>
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
