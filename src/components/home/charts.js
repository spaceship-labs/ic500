import React, { Component } from "react"
import { ChartsContent } from "./index.styled"
import { Section, Container, SubtitleSmall } from "../../theme/index.styled"
import chart1 from "../../theme/images/grafica1.png"
import chart2 from "../../theme/images/grafica2.png"
import chart3 from "../../theme/images/grafica3.png"

class ChartsComponent extends Component {
  render() {
    return (
      <Section id="HomeCharts">
        <ChartsContent>
          <Container size="medium">
            <br />
            <br />
            <SubtitleSmall>Resultados generales 2019</SubtitleSmall>
            <p>Comparativo IC500 2017 Y 2018</p>
            <p>
              <img alt="" src={chart1} />
            </p>
          </Container>
          <Container size="medium">
            <p>
              ¿La empresa publica en su página web un código de ética o de
              conducta para empleados?
            </p>
            <p>
              <img alt="" src={chart2} />
            </p>
          </Container>
          <Container size="large">
            <p>Componentes de las políticas anticorrupción en 2017 y 2018</p>
            <p>
              <img alt="" src={chart3} />
            </p>
          </Container>
        </ChartsContent>
      </Section>
    )
  }
}

export default ChartsComponent
