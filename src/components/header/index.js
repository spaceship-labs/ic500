import React, { Component } from "react"
import { Header, Logo, MenuItem, Menu } from "./index.styled"
import { Container, Rows, Button } from "../../theme/index.styled"
import logo from "../../theme/LogoIntegridad.jpg"

class HeaderComponent extends Component {
  render() {
    const { section } = this.props
    return (
      <Header>
        <Container size="large">
          <Rows align="space-between">
            <Logo href="/">
              <img alt="IC500" src={logo} />
            </Logo>
            <Menu>
              <MenuItem
                className={section === "about" ? "active" : ""}
                href="/quienes-somos"
              >
                Quienes Somos
              </MenuItem>
              <MenuItem
                className={section === "glosario" ? "active" : ""}
                href="/"
              >
                Glosario
              </MenuItem>
              <MenuItem
                className={section === "metodologia" ? "active" : ""}
                href="/metodologia"
              >
                Metodología
              </MenuItem>
              <MenuItem
                className={section === "recursos" ? "active" : ""}
                href="/"
              >
                Recursos
              </MenuItem>
              <Button href="/">Contacto</Button>
            </Menu>
          </Rows>
        </Container>
      </Header>
    )
  }
}

export default HeaderComponent
