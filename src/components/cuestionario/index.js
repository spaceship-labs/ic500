import React, { Component } from "react"
import { TextWrapper, ResultsTest } from "./index.styled"
import {
  Section,
  Container,
  Rows,
  Paragraph,
  Button,
} from "../../theme/index.styled"
import { Questions } from "./questions"
import QuestionComponent from "./question"
import arrow from "../../theme/images/arrow2.png"

class CuestionarioComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { questions: Questions }
  }
  render() {
    return (
      <React.Fragment>
        <Section>
          <Container size="large" padding>
            <Rows wrap>
              {this.state.questions.map((item, index) => (
                <QuestionComponent
                  key={index}
                  number={index + 1}
                  question={item}
                />
              ))}
            </Rows>
            <br />
            <Paragraph align="center">
              <Button>Evaluar</Button>
            </Paragraph>
          </Container>
        </Section>
        <Section color="Black">
          <Container size="medium" padding>
            <ResultsTest>
              <h3>
                De acuerdo con este test de autoevaluación tendrías una
                calificación de:
              </h3>
              <p class="result">9 / 10</p>
              <p>CADA SÍ ES UN PUNTO.</p>
              <h4>
                Se mostrará la calificación que arroja el test y gráficas
                personalizadas para cada respuesta.
              </h4>
              <p>
                <img alt="IC500" src={arrow} />
              </p>
            </ResultsTest>
          </Container>
        </Section>
        <Section color="LGray">
          <Container size="large">
            <TextWrapper>
              <h2>Gráficas</h2>
              <h3>
                Por cada respuesta que se responda que SÍ se mostrará cuantas
                empresas en el índice tienen este elemento y cuantas no por año.
              </h3>
            </TextWrapper>
          </Container>
        </Section>
        <Section>
          <Container size="large" padding>
            <Rows wrap rowM>
              {this.state.questions.map((item, index) => (
                <QuestionComponent
                  key={index}
                  number={index + 1}
                  fullQuestion
                  question={item}
                />
              ))}
            </Rows>
          </Container>
        </Section>
      </React.Fragment>
    )
  }
}

export default CuestionarioComponent
