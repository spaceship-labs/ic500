import React, { Component } from "react"
import { Question, QuestionTitle, Answer } from "./index.styled"
import ChartImg from "../../theme/images/grafica2.png"
import ChartComponent from "./chart"

class QuestionComponent extends Component {
  answer = val => {
    this.props.answer(val)
  }
  render() {
    const { question } = this.props
    const chart = <ChartComponent data={question.values.text} />
    return (
      <Question>
        <QuestionTitle>
          <span>{this.props.number}.</span>
          {question.question.text}
        </QuestionTitle>
        {!this.props.fullQuestion ? (
          <div>
            <Answer
              onClick={() => this.answer(true)}
              className={question.answer === true ? "active" : ""}
            >
              SI
            </Answer>
            <Answer
              onClick={() => this.answer(false)}
              className={question.answer === false ? "active" : ""}
            >
              NO
            </Answer>
          </div>
        ) : (
          chart
        )}
      </Question>
    )
  }
}

export default QuestionComponent
