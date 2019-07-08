import React, { Component } from "react"
import { TextWrapper, ResultsTest } from "./index.styled"
import {
  Section,
  Container,
  Rows,
  Paragraph,
  Button,
} from "../../theme/index.styled"
import QuestionComponent from "./question"
import arrow from "../../theme/images/arrow2.png"
import smoothscroll from "smoothscroll-polyfill"

class CuestionarioComponent extends Component {
  constructor(props) {
    super(props)
    smoothscroll.polyfill()
    this.state = {
      questions: this.props.data.questions,
      complete: false,
      results: "",
      charts: "",
    }
  }
  isComplete = newQuestions => {
    const QA = this.state.questions.reduce((total, item) => {
      total += typeof item.answer === "undefined" ? 0 : 1
      return total
    }, 0)
    const complete = QA === this.state.questions.length
    this.setState({ complete: complete, questions: newQuestions })
  }
  setAnswer = (val, index) => {
    const answer = { ...this.state.questions[index], answer: val }
    let newQuestions = this.state.questions
    newQuestions[index] = answer
    this.isComplete(newQuestions)
  }
  getCharts = () => {
    return (
      <Container size="large" padding>
        <Rows wrap rowM>
          {this.state.questions.map((item, index) => (
            <QuestionComponent
              key={index}
              number={index + 1}
              fullQuestion
              question={item}
              evaluated={false}
            />
          ))}
        </Rows>
      </Container>
    )
  }
  evaluate = () => {
    if (this.state.complete === false) return
    const newResults = this.state.questions.reduce((total, item) => {
      total += item.answer === true ? 1 : 0
      return total
    }, 0)
    const charts = this.getCharts()
    this.setState({
      results: `${newResults} / ${this.state.questions.length}`,
      charts: charts,
    })
    setTimeout(() => {
      this.scrollTo()
    }, 500)
  }
  scrollTo = () => {
    const element = document.getElementById("resultsSection")
    window.scroll({ top: element.offsetTop, let: 0, behavior: "smooth" })
  }
  render() {
    const { title_results, results_content } = this.props.data
    return (
      <React.Fragment>
        <Section padding>
          <Container size="large">
            <Rows wrap>
              {this.state.questions.map((item, index) => (
                <QuestionComponent
                  key={index}
                  answer={val => this.setAnswer(val, index)}
                  number={index + 1}
                  question={item}
                  evaluated={this.state.results === "" ? false : true}
                />
              ))}
            </Rows>
            <br />
            <Paragraph align="center">
              <Button
                disabled={!this.state.complete}
                onClick={() => this.evaluate()}
              >
                Evaluar
              </Button>
            </Paragraph>
          </Container>
        </Section>
        <Section
          id="resultsSection"
          color="Black"
          hidden={this.state.results === ""}
        >
          <Container size="medium" padding>
            <ResultsTest>
              <h3>{title_results.text}</h3>
              <p className="result">{this.state.results}</p>
              <p>
                <img alt="IC500" src={arrow} />
              </p>
            </ResultsTest>
          </Container>
        </Section>
        <Section hidden={this.state.results === ""} color="LGray">
          <Container size="large">
            <TextWrapper
              dangerouslySetInnerHTML={{ __html: results_content.html }}
            />
          </Container>
        </Section>
        <Section>{this.state.charts}</Section>
      </React.Fragment>
    )
  }
}

export default CuestionarioComponent
