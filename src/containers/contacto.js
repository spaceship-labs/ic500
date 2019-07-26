import React, { Component } from "react"
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
  SuccessMessage,
} from "../theme/index.styled"
import SEO from "../components/seo"
import queryString from "query-string"

class ContactContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openConfirm: false,
    }
  }

  componentDidMount() {
    const showConfirm =
      queryString.parse(this.props.location.search).success === "ok"
    this.setState({ openConfirm: showConfirm })
    //console.log("showConfirm", showConfirm)
    if (typeof window !== `undefined`) {
      const WOW = require("wowjs")
      new WOW.WOW({
        live: false,
      }).init()
    }
  }
  render() {
    const { title, contact_data } = this.props.data
    const returnUrlBase = this.props.location.origin
    const email = "contacto@integridadcorporativa500.mx"
    return (
      <React.Fragment>
        <SEO
          lang="es"
          title="Integridad Corporativa 500"
          keywords={["ic500"]}
          description="Integridad Corporativa 500"
        />
        <TitleBar>
          <Title className="wow fadeInUp" style={{ visibility: "hidden" }}>
            {title.text}
          </Title>
        </TitleBar>
        <Section>
          <Container padding size="large">
            <Rows align="space-between">
              <Box
                width="45%"
                className="wow fadeInLeft"
                style={{ visibility: "hidden" }}
              >
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
              <Row
                width="45%"
                className="wow fadeInRight"
                style={{ visibility: "hidden" }}
              >
                {this.state.openConfirm === true ? (
                  <SuccessMessage>
                    Su correo ha sido enviado correctamente, gracias por su
                    mensaje. En caso de ser necesario nos contacteremos lo más
                    pronto posible.
                  </SuccessMessage>
                ) : (
                  ""
                )}
                <Form
                  action={`https://formspree.io/erick@spaceshiplabs.com`}
                  method="POST"
                >
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
                  <input
                    type="hidden"
                    name="_next"
                    value={`${returnUrlBase}/contacto?success=ok`}
                  />
                  <input type="hidden" name="_language" value="es" />
                </Form>
              </Row>
            </Rows>
          </Container>
        </Section>
      </React.Fragment>
    )
  }
}

export default ContactContainer
