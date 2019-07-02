import React, { Component } from "react"
import { ContentText, DownloadLinks } from "./index.styled"
import {
  Section,
  Container,
  Title,
  Button,
  Rows,
} from "../../theme/index.styled"
import mcci from "../../theme/mcci_logoGRIS.jpg"
import transparencia from "../../theme/transparencia_mexicanaGRIS.jpg"
import ic500 from "../../theme/LogoIntegridadGraficas.jpg"
import DropdownComponent from "./dropdown"

class ContentComponent extends Component {
  render() {
    const { content_1, content_2 } = this.props.data
    return (
      <React.Fragment>
        <Section id="HomeContent">
          <Container size="medium">
            <ContentText>
              <br />
              <div dangerouslySetInnerHTML={{ __html: content_1.html }} />
              <br />
            </ContentText>
          </Container>
          <Container size="small">
            <ContentText>
              {/*<p>
                <Button href="/en">
                  Ver Video <i className="icon-play" />
                </Button>
              </p>*/}
              <br />
              <div dangerouslySetInnerHTML={{ __html: content_2.html }} />
              <br />
            </ContentText>
          </Container>
          <Container size="medium">
            <ContentText>
              <p>
                <span>
                  <img alt="" src={mcci} />
                </span>
                <span>
                  <img alt="" src={transparencia} />
                </span>
              </p>
              <Title>
                Mexicanos contra la corrupción y la Impunidad y Transparencia
                Mexicana presentan:
              </Title>
              <br />
              <p>
                <img alt="" src={ic500} />
              </p>
              <br />
              <br />
            </ContentText>
          </Container>
        </Section>
        <Section color="LGray" id="downloads">
          <Container size="small">
            <DownloadLinks>
              <Rows align="space-around" rowM rowS>
                <DropdownComponent />
                <Button grayButton href={this.props.db.database.url}>
                  Descarga la Base de Datos
                </Button>
              </Rows>
            </DownloadLinks>
          </Container>
        </Section>
      </React.Fragment>
    )
  }
}

export default ContentComponent
