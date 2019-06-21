import React, { Component } from "react"
import { Header, Logo, MenuItem, Menu } from "./index.styled"
import { Rows, Button } from "../../theme/index.styled"
import logo from "../../theme/LogoIntegridad.jpg"
import logoSmall from "../../theme/2doLogoIntegridad.jpg"

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    const e = document.documentElement
    const g = document.getElementsByTagName("body")[0]
    const w = window.innerWidth || e.clientWidth || g.clientWidth
    this.state = {
      scrollClass: this.props.section !== "home" || w <= 1000 ? "minify" : "",
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.updateScrollState, {
      passive: true,
    })
  }
  updateScrollState = event => {
    if (!event) return
    const e = document.documentElement
    const g = document.getElementsByTagName("body")[0]
    const w = window.innerWidth || e.clientWidth || g.clientWidth
    const newScroll =
      window.scrollY > 300 || this.props.section !== "home" || w <= 1000
        ? "minify"
        : ""
    this.setState({ scrollClass: newScroll })
  }
  render() {
    const { section } = this.props
    return (
      <Header className={this.state.scrollClass}>
        <Rows rowM align="flex-end">
          <Logo href="/">
            <img alt="IC500" src={logo} />
          </Logo>
          <Logo href="/" className="small">
            <img alt="IC500" src={logoSmall} />
          </Logo>
          <Menu className={this.state.scrollClass}>
            <Button className="showOnScroll" href="/">
              Descargar Informe{" "}
              <span>
                2018 <i className="icon-arrow" />
              </span>
            </Button>
            <Button className="showOnScroll" grayButton href="/">
              Descarga la Base de Datos
            </Button>
            <MenuItem
              className={section === "about" ? "active" : ""}
              href="/quienes-somos"
            >
              Quienes Somos
            </MenuItem>
            <MenuItem
              className={section === "glosario" ? "active" : ""}
              href="/glosario"
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
              href="/recursos"
            >
              Recursos
            </MenuItem>
            <Button hiddenM href="/">
              Contacto
            </Button>
            <Button hiddenS color="Black" href="/cuestionario">
              Test
            </Button>
          </Menu>
        </Rows>
      </Header>
    )
  }
}

export default HeaderComponent
