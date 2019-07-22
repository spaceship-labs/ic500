import React, { Component } from "react"
import { Footer, Logo, SmallMenu, Social } from "./index.styled"
import { Container, Rows, Row } from "../../theme/index.styled"
import ic from "../../theme/LogoIntegridadF.png"
import mcci from "../../theme/mcci_logo.png"
import transparencia from "../../theme/TransparenciaLogo.png"
import usaid from "../../theme/USAIDlogo.png"

class FooterComponent extends Component {
  render() {
    const { facebook, twitter, instagram, youtube } = this.props.data
    return (
      <Footer>
        <Container size="large">
          <Rows align="space-between">
            <Row shrink>
              <Logo href="/">
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
            <Row width="50%">
              <Rows rowS rowM align="space-between" alignM="center">
                <Logo href="/" size="160" className="wow fadeInRight">
                  <img alt="USAID" src={usaid} />
                </Logo>
                <Logo href="/" size="125" className="wow fadeInRight">
                  <img alt="MCCI" src={mcci} />
                </Logo>
                <Logo href="/" size="160" className="wow fadeInRight">
                  <img alt="Transparencia Mexicana" src={transparencia} />
                </Logo>
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
