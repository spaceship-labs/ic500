import React, { Component } from "react"
import { Question, QuestionTitle, Answer, Over } from "./index.styled"
import ChartComponent from "./chart"

class QuestionComponent extends Component {
  answer = val => {
    this.props.answer(val)
  }
  render() {
    const { question, evaluated } = this.props
    const chart = <ChartComponent data={question.values.text} />
    return (
      <Question hidden={this.props.fullQuestion && !question.answer}>
        <QuestionTitle>
          <span>{this.props.number}.</span>
          {question.question.text}
        </QuestionTitle>
        {!this.props.fullQuestion ? (
          <React.Fragment>
            <Over hidden={!evaluated} />
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
          </React.Fragment>
        ) : (
          chart
        )}
      </Question>
    )
  }
}

export default QuestionComponent
