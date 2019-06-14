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
        <Title>¿Quiénes Somos?</Title>
      </TitleBar>
      <Section>
        <Container>
          <TextWrapper>
            <h1>Integridad Corporativa 500 (IC500)</h1>
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
            <h2>Código de ética o de conducta</h2>
            <p>
              Declaración de principios y valores que establece un conjunto de
              expectativas y estándares de cómo se comporta una organización,
              cuerpo gubernamental, compañía, grupo afiliado, directivo,
              empleado o socio, teniendo en cuenta niveles mínimos de integridad
              y acciones disciplinarias para la organización y su personal
              (Transparencia Internacional, 2009, pg. 8).
            </p>
            <h2>Confidencialidad o anonimidad del denunciante</h2>
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
            <h2>Fraude</h2>
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
            <h2>Lavado de dinero</h2>
            <p>
              Proceso de ocultar el origen, la propiedad o el destino del dinero
              obtenido de manera ilegal o deshonesta, ocultándolo en actividades
              económicas legítimas para hacerlo parecer legal. Las políticas
              específicas para prevenirlo deben establecer acciones o requisitos
              necesarios para asegurarse, en la medida de lo posible, que los
              recursos recibidos de algún tercero no son de procedencia ilícita.
              Estas acciones ayudan a proteger a la empresa en caso de necesitar
              explicar alguna transacción ante las autoridades (Transparencia
              Internacional, 2009, pág. 26).
            </p>
            <h2>Monitoreo de la política anticorrupción</h2>
            <p>
              Mecanismos que permiten identificar las fortalezas y debilidades
              de una Política anticorrupción o de integridad, de manera que
              pueda mejorar y que forme parte de la gestiónde una organización.
              Dependiendo del tamaño y recursos de la empresa, estas funciones
              de monitoreo recaen en un oficial de cumplimiento o algún órgano
              de gobierno, como un comité de ética o de auditoría.”
            </p>
          </TextWrapper>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default AboutContainer
