import React, { Component } from "react"
import { ChartsContent } from "./index.styled"
import { Section, Container, SubtitleSmall } from "../../theme/index.styled"
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
