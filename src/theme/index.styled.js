import styled from "styled-components"

/* 
          Containers 
*/

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Content = styled.div`
  padding: 0;
  font-family: ${props => props.theme.FontAleo};
  * {
    font-family: ${props => props.theme.FontAleo};
  }
  ${props => props.theme.largeBreakPoint} {
  }
  ${props => props.theme.smallBreakPoint} {
  }
`

const Section = styled.section`
  ${props =>
    props.color ? "background-color:" + props.theme[props.color] : ""}
`

const Container = styled.div`
  width: 95%;
  ${props =>
    !props.size ? "max-width:" + props.theme.ContainerCommon + "px" : ""};
  ${props =>
    props.size === "small"
      ? "max-width:" + props.theme.ContainerSmall + "px"
      : ""};
  ${props =>
    props.size === "medium"
      ? "max-width:" + props.theme.ContainerMedium + "px"
      : ""};
  ${props =>
    props.size === "large"
      ? "max-width:" + props.theme.ContainerLarge + "px"
      : ""};
  margin: 0 auto;
`

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.align && props.align === "start" ? "flex-start" : props.align};
  ${props => (props.wrap ? "flex-wrap: wrap;" : "")} ${props =>
    props.theme.mediumBreakPoint} {
    flex-direction: column;
  }
`
const Row = styled.div`
  flex: ${props => (props.width ? "0 1 " + props.width : "1 0 auto")};
  flex-direction: column;
`

const Button = styled.a`
  display: inline-block;
  font-size: 14px;
  color: ${props => (props.grayButton ? props.theme.Black : props.theme.White)};
  background-color: ${props =>
    props.grayButton ? props.theme.Gray : props.theme.Yellow};
  padding: 10px 25px;
  text-decoration: none;
  border-radius: 20px;
  text-transform: uppercase;
  font-family: ${props => props.theme.Font};
`

/* 
          Texts
*/

const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
  line-height: 1.4;
`

const Paragraph = styled.p`
  font-size: 17px;
  ${props =>
    props.size && props.size === "1" ? "font-size:16px;line-height: 1.5;" : ""}
  ${props =>
    props.size && props.size === "2" ? "font-size:24px;line-height: 1.33;" : ""}
  ${props =>
    props.size && props.size === "3" ? "font-size:16px;line-height: 1.75;" : ""}
  font-weight: 300;
  text-align: ${props => (props.align ? props.align : "left")};
  color: ${props => props.theme.Black};
  b{
    font-weight: 500;
  }
`

export {
  Wrapper,
  Content,
  Section,
  Container,
  Rows,
  Row,
  Title,
  Paragraph,
  Button,
}
