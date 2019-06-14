import React from "react"
import {
  Section,
  Container,
  TitleBar,
  Title,
  TextWrapper,
} from "../theme/index.styled"

const MetodologiaContainer = ({ data }) => {
  return (
    <React.Fragment>
      <TitleBar>
        <Title>Metodología</Title>
      </TitleBar>
      <Section>
        <Container>
          <TextWrapper>
            <p>
              Mecanismo de revisión que utiliza un cuestionario diseñado e
              implementado por Mexicanos Contra la Corrupción y la Impunidad y
              Transparencia Mexicana para identificar la publicidad de una
              política de integridad o de sus elementos, y hacer una valoración
              de sobre el nivel de detalle de ésta. Su metodología está basada
              en el componente de publicidad de las políticas anticorrupción del
              estudio Transparencia de la Información Corporativa (TRAC, por sus
              siglas en inglés) de Transparencia Internacional. Las preguntas a
              evaluar se agrupan en cuatro ejes: (1) Publicidad de los elementos
              de una política anticorrupción integral; (2) Alcance y
              socialización de la política anticorrupción; (3) Sistema de
              monitoreo, denuncia y sanciones; y (4) Accesibilidad de la
              información.”
            </p>
            <p>
              Declaración de principios y valores que establece un conjunto de
              expectativas y estándares de cómo se comporta una organización,
              cuerpo gubernamental, compañía, grupo afiliado, directivo,
              empleado o socio, teniendo en cuenta niveles mínimos de integridad
              y acciones disciplinarias para la organización y su personal
              (Transparencia Internacional, 2009, pg. 8).
            </p>
            <h3>
              Se diseñó un cuestionario basado en el componente de publicidad de
              las politicas anticorrupción del estudio TRAC de Transparencia
              Internacional. Las preguntas a evaluar se agrupan en los
              siguientes cuatro ejes:
            </h3>
            <ol>
              <li>
                Publicidad de los elementos de una politica anticorrupción
                integral
              </li>
              <li>Alcance y socialización de la politica anticorrupción</li>
              <li>Sistema de monitoreo, denuncia y sanciones.</li>
              <li>Accesibilidad de la información</li>
            </ol>
            <p>
              Imposibilidad de que el denunciado rastree el origen de la
              denuncia. Las empresas y organizaciones deben establecer los
              procedimientos y medidas para facilitar e incentivar la denuncia
              para que, en caso de experimentar o presenciar sobornos u otros
              actos de corrupción, cuenten con los medios necesarios para
              denunciar a través de mecanismos que garanticen la
              confidencialidad y anonimidad del denunciante. Adicionalmente, es
              deseable que la empresa u organización establezca un mecanismo
              para el acompañamiento del denunciante ante la autoridad si así
              procede, sobre todo cuando sea necesario solicitar medidas de
              protección.”
            </p>
          </TextWrapper>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default MetodologiaContainer
