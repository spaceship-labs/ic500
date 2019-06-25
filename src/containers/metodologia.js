import React from "react"
import {
  Section,
  Container,
  TitleBar,
  Title,
  TextWrapper,
} from "../theme/index.styled"
import SEO from "../components/seo"

const MetodologiaContainer = ({ data }) => {
  return (
    <React.Fragment>
      <SEO
        lang="es"
        title="Integridad Corporativa 500"
        keywords={["ic500"]}
        description="Integridad Corporativa 500"
      />
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

export default MetodologiaContainer
