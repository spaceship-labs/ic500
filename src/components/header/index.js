import React, { Component } from "react"
import { Header, Logo, MenuItem, Menu, Burguer } from "./index.styled"
import { Rows, Button } from "../../theme/index.styled"
import logo from "../../theme/LogoIntegridad.jpg"
import logoSmall from "../../theme/2doLogoIntegridad.jpg"

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    const w = this.getWindowWidth()
    this.state = {
      scrollClass: this.props.section !== "home" || w <= 1000 ? "minify" : "",
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.updateScrollState, {
      passive: true,
    })
  }
  getWindowWidth = () => {
    let result = 1000
    if (typeof window !== `undefined`) {
      const e = document.documentElement
      const g = document.getElementsByTagName("body")[0]
      result = window.innerWidth || e.clientWidth || g.clientWidth
    }
    return result
  }
  updateScrollState = event => {
    if (!event) return
    const w = this.getWindowWidth()
    const newScroll =
      window.scrollY > 300 || this.props.section !== "home" || w <= 1000
        ? "minify"
        : ""
    this.setState({ scrollClass: newScroll })
  }
  getInforme = () => {
    const { informes } = this.props.data
    return informes.reduce(
      (result, informe) => {
        if (parseInt(informe.year.text) >= result.year)
          result = {
            year: parseInt(informe.year.text),
            url: informe.informe.url,
          }
        return result
      },
      { year: 1, url: "" }
    )
  }
  render() {
    const { section } = this.props
    const { database } = this.props.data
    const informe = this.getInforme()
    return (
      <Header className={this.state.scrollClass}>
        {/*<Burguer
          onClick={() => this.toggleMenu()}
          className={this.state.menu ? "open" : ""}
        >
          <i className="" />
      </Burguer>*/}
        <Rows rowS rowM align="flex-end">
          <Logo href="/">
            <img alt="IC500" src={logo} />
          </Logo>
          <Logo href="/" className="small">
            <img alt="IC500" src={logoSmall} />
          </Logo>
          <Menu className={this.state.scrollClass}>
            <Button className="showOnScroll" href={informe.url} target="_blank">
              <i className="hideS">Descargar </i>
              Informe{" "}
              <span>
                {informe.year} <i className="icon-descarga showS" />
              </span>
            </Button>
            <Button className="showOnScroll" grayButton href={database.url}>
              <i className="hideS">Descargar la </i>
              Base de Datos <i className="icon-descarga showS" />
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
            <Button hiddenS color="Black" href="/cuestionario">
              Test
            </Button>
            <Button hiddenM href="/contacto">
              Contacto
            </Button>
          </Menu>
        </Rows>
      </Header>
    )
  }
}

export default HeaderComponent
