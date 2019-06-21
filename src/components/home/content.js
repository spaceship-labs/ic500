import React, { Component } from "react"
import { ContentText, DownloadLinks } from "./index.styled"
import {
  Section,
  Container,
  Title,
  Paragraph,
  Button,
  Rows,
} from "../../theme/index.styled"
import img from "../../theme/images/ImgBanner.png"
import mcci from "../../theme/mcci_logoGRIS.jpg"
import transparencia from "../../theme/transparencia_mexicanaGRIS.jpg"
import ic500 from "../../theme/LogoIntegridadGraficas.jpg"

class ContentComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Section id="HomeContent">
          <Container size="medium">
            <ContentText>
              <br />
              <Paragraph size="2">
                <b>
                  Integridad Corporativa 500 (IC500) es el primer diagnóstico y
                  evaluación de la presencia, calidad, publicidad y
                  transparencia
                </b>
                con la que las 500 empresas más importantes de México dan a
                conocer sus políticas de integridad.
              </Paragraph>
              <br />
            </ContentText>
          </Container>
          <Container size="small">
            <ContentText>
              <p>
                <Button href="/en">
                  Ver Video <i className="icon-play" />
                </Button>
              </p>
              <br />
              <Paragraph size="1">
                <b>
                  IC500 califica la existencia de códigos de ética y otras
                  manifestaciones del compromiso anticorrupción de las empresas
                  y su puntaje está basado en la transparencia, publicidad,
                  precisión y alcance de las mismas como parte de un compromiso
                  en contra de la corrupción.
                </b>
              </Paragraph>
              <Paragraph size="1">
                Otorga puntuaciones más altas a aquellas empresas que hacen
                públicas y accesibles sus normas anticorrupción, socializan su
                compromiso con empleados, directivos, socios comerciales y
                accionistas y, establecen mecanismos para hacerlos efectivos.
              </Paragraph>
              <br />
            </ContentText>
          </Container>
          <Container size="medium">
            <ContentText>
              <p>
                <span>
                  <img alt="" src={mcci} />
                </span>
                <span>
                  <img alt="" src={transparencia} />
                </span>
              </p>
              <Title>
                Mexicanos contra la corrupción y la Impunidad y Transparencia
                Mexicana presentan:
              </Title>
              <br />
              <p>
                <img alt="" src={ic500} />
              </p>
              <br />
              <br />
            </ContentText>
          </Container>
        </Section>
        <Section color="LGray" id="downloads">
          <Container size="small">
            <DownloadLinks>
              <Rows align="space-around" rowM rowS>
                <Button href="/">
                  Descarga informe{" "}
                  <span>
                    2018 <i className="icon-arrow" />
                  </span>
                </Button>
                <Button grayButton href="/en">
                  Descarga la Base de Datos
                </Button>
              </Rows>
            </DownloadLinks>
          </Container>
        </Section>
      </React.Fragment>
    )
  }
}

export default ContentComponent
