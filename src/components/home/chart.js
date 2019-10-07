import React, { Component } from "react"
import { Container, CustomContainer } from "../../theme/index.styled"
import { ContentText } from "./index.styled"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  Label,
  LabelList,
  ResponsiveContainer,
  Text,
} from "recharts"

const CustomXAxis = ({ x, y, payload, size }) => {
  const width = size <= 3 ? 200 : 80
  return (
    <Text x={x} y={y} width={width} textAnchor="middle" verticalAnchor="start">
      {payload.value}
    </Text>
  )
}

class ChartComponent extends Component {
  constructor(props) {
    super(props)
    const { primary, slice_type } = this.props.chart
    this.state = {
      chart: this.props.chart,
      data: [],
      name: primary.chart_title.text,
      Xaxis: primary.axis_x.text || "",
      Yaxis: primary.axis_y.text || "",
      type: slice_type,
    }
  }
  componentWillMount() {
    const { items, primary, slice_type } = this.props.chart
    const newState = {
      chart: this.props.chart,
      data: this.getData(items, slice_type),
      name: primary.chart_title.text,
      Xaxis: primary.axis_x.text || "",
      Yaxis: primary.axis_y.text || "",
      type: slice_type,
    }
    this.setState(newState)
    //console.log("NEW STATE", newState)
  }
  getData = (items, type) => {
    return type === "graficas_de_preguntas"
      ? this.getBarChartData(items)
      : this.getAreaChartData(items)
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
  getAreaChartData = items => {
    let data = {}
    const total = Array.from(Array(100), (x, index) => index)
    total.map(index => {
      return (data[`${index}`] = {
        name: `${index}`,
      })
    })
    let years = ""
    items.map((item, index) => {
      const { values, year } = item
      years += (years !== "" ? "," : "") + year.text
      const valuesLines = values.text.split(" ")
      valuesLines.map((line, index) => {
        if (index === 0) return
        const currentLine = line.split(",")
        const puntaje = Math.floor(currentLine[0])
        if (!data[`${puntaje}`]) {
          data[`${puntaje}`] = {
            name: `${puntaje}`,
            years: years,
          }
        }
        data[`${puntaje}`].years = years
        data[`${puntaje}`][year.text] = parseFloat(currentLine[1])
      })
    })
    return Object.values(data)
  }
  barChart = () => {
    const { data } = this.state
    //console.log("BAR CHART DATA", data)
    const w = data.length * 160
    const years = data.length > 0 ? data[0].years.split(",") : []
    const colors =
      data.length < 3
        ? ["#fb8077", "#5a9eeb", "#e7a65a", "#adb2ba"]
        : ["#e7a65a", "#fb8077", "#5a9eeb", "#adb2ba"]
    return (
      <CustomContainer width={w < 500 ? 500 : w}>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              interval={0}
              tick={<CustomXAxis size={data.length} />}
            >
              {/*<Label
                value={this.state.Xaxis}
                offset={-2}
                position="insideBottom"
              />*/}
            </XAxis>
            <YAxis
              label={{
                value: this.state.Yaxis,
                angle: -90,
                position: "insideBottomLeft",
              }}
            ></YAxis>
            <Tooltip />
            <Legend verticalAlign="top" />
            {years.map((y, index) => {
              //console.log("YEAR", y)
              return (
                <Bar key={index} dataKey={y} fill={colors[index % 4]}>
                  <LabelList dataKey={y} position="top" />
                </Bar>
              )
            })}
          </BarChart>
        </ResponsiveContainer>
      </CustomContainer>
    )
  }
  areaChart = () => {
    const { data } = this.state
    //antes 730 de ancho
    const years = data.length > 0 ? data[0].years.split(",") : []
    const colors = ["#fb8077", "#e7a65a", "#5a9eeb", "#adb2ba"]
    return (
      <ResponsiveContainer width="100%" height={450}>
        <AreaChart data={data}>
          <XAxis
            label={{
              value: this.state.Xaxis,
              position: "insideBottom",
              offset: -5,
            }}
          />
          <YAxis
            label={{
              value: this.state.Yaxis,
              angle: -90,
              position: "insideBottomLeft",
            }}
          ></YAxis>
          <Tooltip />
          <Legend verticalAlign="top" />
          {years.map((y, index) => {
            return (
              <Area
                connectNulls
                type="natural"
                key={index}
                dataKey={y}
                fill={colors[index % 4]}
                stroke={colors[index % 4]}
                fillOpacity={0.8}
              />
            )
          })}
        </AreaChart>
      </ResponsiveContainer>
    )
  }
  render() {
    //console.log("CHART", this.props.chart)
    return (
      <Container
        size="large"
        className="wow fadeInUp"
        style={{ visibility: "hidden" }}
      >
        <br />
        <br />
        <ContentText>
          <h2>{this.state.name}</h2>
        </ContentText>
        {this.state.type === "graficas_de_preguntas"
          ? this.barChart()
          : this.areaChart()}
      </Container>
    )
  }
}

export default ChartComponent
