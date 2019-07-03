import React, { Component } from "react"
import { Container } from "../../theme/index.styled"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts"

class ChartComponent extends Component {
  constructor(props) {
    super(props)
    const { data } = this.props
    this.state = {
      chart: data,
      data: this.getBarChartData(data),
    }
  }
  getBarChartData = values => {
    const data = []
    const valuesLines = values.split(" ")
    let i = {
      name: "",
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
  }
  barChart = () => {
    const { data } = this.state
    const years = data.length > 0 ? data[0].years.split(",") : []
    const colors =
      data.length < 3
        ? ["#fb8077", "#5a9eeb", "#e7a65a", "#adb2ba"]
        : ["#e7a65a", "#fb8077", "#5a9eeb", "#adb2ba"]
    return (
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis dataKey="name">
            <Label value="" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{
              value: "Número de empresas",
              angle: -90,
              position: "insideBottomLeft",
            }}
          ></YAxis>
          <Tooltip />
          <Legend />
          {years.map((y, index) => {
            return <Bar key={index} dataKey={y} fill={colors[index % 4]} />
          })}
        </BarChart>
      </ResponsiveContainer>
    )
  }
  render() {
    return (
      <div>
        <br />
        {this.barChart()}
      </div>
    )
  }
}

export default ChartComponent
