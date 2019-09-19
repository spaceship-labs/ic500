import React from "react"
import { Section, Container } from "../../theme/index.styled"
import { ContentText } from "./index.styled"

const HomeFooterComponent = ({ data }) => {
  return (
    <Section id="homeFooter">
      <Container size="small" padding>
        <br />
        <ContentText
          smallText
          dangerouslySetInnerHTML={{ __html: data.footer.html }}
        />
        <br />
      </Container>
    </Section>
  )
}

export default HomeFooterComponent
