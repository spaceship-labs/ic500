import React from "react"
import {
  Section,
  Container,
  TitleBar,
  Title,
  TextWrapper,
  Rows,
  Row,
  Box,
  Form,
} from "../theme/index.styled"
import SEO from "../components/seo"

const ContactContainer = ({ data }) => {
  const { title, email, contact_data } = data
  return (
    <React.Fragment>
      <SEO
        lang="es"
        title="Integridad Corporativa 500"
        keywords={["ic500"]}
        description="Integridad Corporativa 500"
      />
      <TitleBar>
        <Title>{title.text}</Title>
      </TitleBar>
      <Section>
        <Container padding size="large">
          <Rows align="space-between">
            <Box width="45%">
              <TextWrapper>
                {contact_data.map(item => {
                  return (
                    <div>
                      <h4>{item.contact_title.text}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.contact_content.html,
                        }}
                      />
                      <br />
                    </div>
                  )
                })}
              </TextWrapper>
            </Box>
            <Row width="45%">
              <Form>
                <p>Nombre</p>
                <p>
                  <input type="text" name="name" />
                </p>
                <p>Email</p>
                <p>
                  <input type="email" name="email" />
                </p>
                <p>Asunto</p>
                <p>
                  <textarea rows="4" name="message" />
                </p>
                <p>
                  <button type="submit">Enviar</button>
                </p>
              </Form>
            </Row>
          </Rows>
          {/*<TextWrapper
            dangerouslySetInnerHTML={{ __html: data.data.content.html }}
          />*/}
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default ContactContainer
