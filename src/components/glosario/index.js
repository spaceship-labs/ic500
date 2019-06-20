import React, { Component } from "react"
import { TextWrapper, ResultsTest } from "./index.styled"
import {
  Section,
  Container,
  Rows,
  Paragraph,
  Button,
} from "../../theme/index.styled"
import { Words } from "./data"
import WordComponent from "./word"

class GlosarioComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { words: Words }
  }
  render() {
    return (
      <Section id="glosario">
        <Container size="large" padding>
          {this.state.words.map((item, index) => (
            <WordComponent key={index} index={index} word={item} />
          ))}
        </Container>
      </Section>
    )
  }
}

export default GlosarioComponent
