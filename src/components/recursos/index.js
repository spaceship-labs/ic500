import React, { Component } from "react"
import {
  Section,
  Container,
  Rows,
  SubtitleSmall,
  TitleBar,
  Title,
} from "../../theme/index.styled"
import RecursoComponent from "./recurso"

class RecursosComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <TitleBar>
          <Container>
            <Title>Recursos</Title>
            <p>
              Este aparto ofrece un compendio de documentos, tanto nacionales
              como internacionales, enfocados en integridad corporativa y
              corrupción en el sector privado. Esta lista no es exhaustiva,
              funge como una primera una aproximación para aquellos interesados
              en saber más del tema e incorporar estás prácticas a sus lugares
              de trabajo.
            </p>
          </Container>
        </TitleBar>
        <Section>
          <Container size="large">
            <br />
            <br />
            <SubtitleSmall center>
              Aunque cada empresa y cada sector debe de adecuar sus políticas de
              integridad corporativa a sus necesidades y requisitos, estos
              documentos pretenden ser una guía básica para hacerlo.
            </SubtitleSmall>
            <br />
            <br />
            <br />
            <Rows wrap>
              <RecursoComponent />
              <RecursoComponent />
              <RecursoComponent />
              <RecursoComponent />
              <RecursoComponent />
            </Rows>
          </Container>
        </Section>
      </React.Fragment>
    )
  }
}

export default RecursosComponent
