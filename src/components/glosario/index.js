import React, { Component } from "react"
import { Section, Container, TitleBar, Title } from "../../theme/index.styled"
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
        <TitleBar>
          <Title>Glosario</Title>
        </TitleBar>
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
