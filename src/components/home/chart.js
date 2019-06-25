import React, { Component } from "react"
import { Section, Container, SubtitleSmall } from "../../theme/index.styled"
import {
  BarChart,
  Bar,
  Brush,
  Cell,
  CartesianGrid,
  ReferenceLine,
  ReferenceDot,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ErrorBar,
  LabelList,
} from "recharts"

class ChartComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chart: {},
      data: [],
      name: "",
      Xaxix: "",
      Yaxix: "",
      type: "",
    }
  }
  componentWillMount() {
    const { items, primary, slice_type } = this.props.chart
    const newState = {
      chart: this.props.chart,
      data: this.getData(items, slice_type),
      name: primary.chart_title.text,
      Xaxix: primary.axix_x || "",
      Yaxix: primary.axix_y || "",
      type: slice_type,
    }
    this.setState(newState)
    //console.log("NEW STATE", newState)
  }
  getData = (items, type) => {
    return type === "graficas_de_preguntas" ? this.getBarChartData(items) : []
  }
  getBarChartData = items => {
    const result = items.reduce((data, item) => {
      const { values } = item
      const valuesLines = values.text.split(" ")
      let i = {
        name: item.section.text,
        years: "",
      }
      valuesLines.map((line, index) => {
        if (index === 0) return
        const currentLine = line.split(",")
        i.years += (i.years !== "" ? "," : "") + currentLine[1]
        i[currentLine[1]] = parseFloat(currentLine[2])
        i[currentLine[1] + "_average"] = (currentLine[2] * 100) / currentLine[0]
      })
      data.push(i)
      return data
    }, [])
    return result
  }
  barChart = () => {
    const { data } = this.state
    //console.log("CHART DATA", data)
    const w = data.length * 150
    const years = data[0].years.split(",")
    const colors = ["#fb8077", "#5a9eeb", "#e7a65a", "#adb2ba"]
    return (
      <BarChart width={w < 500 ? 500 : w} height={350} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {years.map((y, index) => {
          return <Bar key={index} dataKey={y} fill={colors[index % 4]} />
        })}
      </BarChart>
    )
  }
  areaChart = () => {
    return <p>AREA CHART</p>
  }
  render() {
    //console.log("CHART", this.props.chart)
    return (
      <Container size="large">
        <br />
        <br />
        <SubtitleSmall>Resultados generales 2019</SubtitleSmall>
        <p>Comparativo IC500 2017 Y 2018</p>
        {this.barChart()}
      </Container>
    )
  }
}

export default ChartComponent
