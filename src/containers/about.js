import React from "react"
import {
  Section,
  Container,
  TitleBar,
  Title,
  TextWrapper,
} from "../theme/index.styled"

const AboutContainer = ({ data }) => {
  return (
    <React.Fragment>
      <TitleBar>
        <Title>{data.data.title.text}</Title>
      </TitleBar>
      <Section>
        <Container>
          <TextWrapper
            dangerouslySetInnerHTML={{ __html: data.data.content.html }}
          />
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default AboutContainer
