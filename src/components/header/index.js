import React, { Component } from "react"
import {
  Header,
  Logo,
  MenuItem,
  Menu,
  Burguer,
  DropdownMenu,
  Social,
} from "./index.styled"
import { Rows, Row, Button } from "../../theme/index.styled"
import logo from "../../theme/LogoIntegridad.jpg"
import logoSmall from "../../theme/2doLogoIntegridad.jpg"

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    const w = this.getWindowWidth()
    this.state = {
      scrollClass: this.props.section !== "home" || w <= 1000 ? "minify" : "",
      menu: false,
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.updateScrollState, {
      passive: true,
    })
    window.addEventListener("resize", this.updateScrollState, {
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
  toggleMenu = () => {
    this.setState({ menu: !this.state.menu })
  }
  render() {
    const { section } = this.props
    const { database } = this.props.data
    const { facebook, twitter, instagram, youtube } = this.props.data
    const informe = this.getInforme()
    return (
      <Header className={this.state.scrollClass}>
        <Burguer
          onClick={() => this.toggleMenu()}
          className={this.state.menu ? "open" : ""}
        >
          <i className="" />
        </Burguer>
        <DropdownMenu className={this.state.menu ? "open" : ""}>
          <Rows rowM rowS>
            <i className="close icon-close" onClick={() => this.toggleMenu()} />
            <Row>
              <ul>
                <li>
                  <a href="/quienes-somos">Quiénes somos</a>
                </li>
                <li>
                  <a href="/glosario">Glosario</a>
                </li>
                <li>
                  <a href="/metodologia">Metodología</a>
                </li>
                <li>
                  <a href="/recursos">Recursos</a>
                </li>
                <li>
                  <a href="/contacto">Contacto</a>
                </li>
              </ul>
              <Rows rowM rowS rowXs>
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
            <Row alignColumn>
              <p>
                <Button href={informe.url} target="_blank">
                  Informe{" "}
                  <span>
                    {informe.year} <i className="icon-descarga " />
                  </span>
                </Button>
              </p>
              <p>
                <Button grayButton href={database.url}>
                  Base de Datos <i className="icon-descarga" />
                </Button>
              </p>
            </Row>
          </Rows>
        </DropdownMenu>
        <Rows rowS rowM rowXs align="flex-end">
          <Logo href="/">
            <img alt="IC500" src={logo} />
          </Logo>
          <Logo href="/" className="small">
            <img alt="IC500" src={logoSmall} />
          </Logo>
          <Menu className={this.state.scrollClass}>
            <Button
              hiddenS
              className="showOnScroll"
              href={informe.url}
              target="_blank"
            >
              <i className="hideS">Descargar </i>
              Informe{" "}
              <span>
                {informe.year} <i className="icon-descarga showS" />
              </span>
            </Button>
            <Button
              hiddenS
              className="showOnScroll"
              grayButton
              href={database.url}
            >
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
            <Button color="Black" href="/cuestionario">
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
