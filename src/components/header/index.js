import React, { Component } from "react"
import { Header, Logo, MenuItem, Menu } from "./index.styled"
import { Container, Rows, Button } from "../../theme/index.styled"
import logo from "../../theme/LogoIntegridad.jpg"

class HeaderComponent extends Component {
  render() {
    return (
      <Header>
        <Container size="large">
          <Rows align="space-between">
            <Logo href="/">
              <img alt="IC500" src={logo} />
            </Logo>
            <Menu>
              <MenuItem href="/en">Quienes Somos</MenuItem>
              <MenuItem href="/en">Glosario</MenuItem>
              <MenuItem href="/en">Metodología</MenuItem>
              <MenuItem href="/en">Recursos</MenuItem>
              <Button href="/en">Contacto</Button>
            </Menu>
          </Rows>
        </Container>
      </Header>
    )
  }
}

export default HeaderComponent
