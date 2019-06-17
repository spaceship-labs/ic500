import React, { Component } from "react"
import { Question, QuestionTitle, Answer } from "./index.styled"
import ChartImg from "../../theme/images/grafica2.png"

class QuestionComponent extends Component {
  render() {
    const { question } = this.props
    const chart = (
      <p>
        <img alt="chart" src={ChartImg} />
      </p>
    )
    return (
      <Question>
        <QuestionTitle>
          <span>{this.props.number}.</span>
          {question.question}
        </QuestionTitle>
        {!this.props.fullQuestion ? (
          <div>
            <Answer className={question.answer ? "active" : ""}>SI</Answer>
            <Answer className={!question.answer ? "active" : ""}>NO</Answer>
          </div>
        ) : (
          chart
        )}
      </Question>
    )
  }
}

export default QuestionComponent
