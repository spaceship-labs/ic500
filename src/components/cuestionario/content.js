import React, { Component } from "react"
import { TextWrapper } from "./index.styled"
import { Section, Container } from "../../theme/index.styled"
import img from "../../theme/images/test2.png"
import arrow from "../../theme/images/arrow1.png"

class ContentComponent extends Component {
  render() {
    return (
      <Section color="LGray">
        <Container size="large">
          <TextWrapper>
            <p>
              <img alt="IC500" src={img} />
            </p>
            <h2>Desarrollamos un test</h2>
            <h3>
              que sirve como una auto-evaluación para que empresas o interesados
              en el tema puedan hacer de manera sencilla y rápida un ejercicio
              de revisión sobre la publicidad de las políticas anticorrupción de
              cualquier empresa.
            </h3>
            <p>
              Todas las respuestas tienen la opción de responder sí o no y están
              en la misma página.
            </p>
            <p>
              <img alt="IC500" src={arrow} />
            </p>
          </TextWrapper>
        </Container>
      </Section>
    )
  }
}

export default ContentComponent
