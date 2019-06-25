import React, { Component } from "react"
import { ChartsContent } from "./index.styled"
import { Section, Container, SubtitleSmall } from "../../theme/index.styled"
import chart1 from "../../theme/images/grafica1.png"
import chart2 from "../../theme/images/grafica2.png"
import chart3 from "../../theme/images/grafica3.png"
import ChartComponent from "./chart"

class ChartsComponent extends Component {
  render() {
    //console.log("DATA", this.props.data.body)
    const charts = this.props.data.body.map((item, index) => {
      return <ChartComponent chart={item} key={index} />
    })
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
          {charts}
          <br />
          <br />
          <br />
        </ChartsContent>
      </Section>
    )
  }
}

export default ChartsComponent
