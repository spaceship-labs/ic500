import styled from "styled-components"

/* 
          Containers 
*/
const hidden = `
  visivility: hidden;
  opacity: 0;
  display:none;
`
const visible = `
  visivility: visible;
  opacity: 1;
`

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
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-top: ${props => (props.section !== "home" ? "77" : "128")}px;
  font-family: ${props => props.theme.FontAleo};
  * {
    font-family: ${props => props.theme.FontAleo};
  }
  ${props => props.theme.largeBreakPoint} {
  }
  ${props => props.theme.mediumBreakPoint} {
    padding-top: 77px;
  }
`

const Section = styled.section`
  display: block;
  flex: 1 0 auto;
  ${props => (props.hidden === false ? hidden : "")}
  ${props => (props.hidden === true ? visible : "")}
  ${props =>
    props.color ? "background-color:" + props.theme[props.color] : ""}
`

const Container = styled.div`
  width: 95%;
  padding: ${props => (props.padding ? "50px 0" : "1px")};
  position: relative;
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
  ${props => props.theme.mediumBreakPoint} {
    width: 95%;
    max-width: 95%;
  }
`

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.align && props.align === "start" ? "flex-start" : props.align};
  ${props => (props.wrap ? "flex-wrap: wrap;" : "")}
  ${props => props.theme.mediumBreakPoint} {
    flex-direction: ${props => (props.rowM ? "row" : "column")};
  }
  ${props => props.theme.mediumBreakPoint} {
    flex-direction: ${props => (props.rowM ? "row" : "column")};
    justify-content: ${props =>
      props.alignM && props.alignM === "start" ? "flex-start" : props.alignM};
  }
  ${props => props.theme.smallBreakPoint} {
    flex-direction: ${props => (props.rowS ? "row" : "column")};
    justify-content: ${props =>
      props.alignS && props.alignS === "start" ? "flex-start" : props.alignS};
  }
`
const Row = styled.div`
  flex: ${props => (props.width ? "0 1 " + props.width : "1 0 auto")};
  ${props => (props.shrink ? "flex: 0 1 auto;" : "")}
  flex-direction: column;
`

const Button = styled.a`
  display: inline-block;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  color: ${props => (props.grayButton ? props.theme.Black : props.theme.White)};
  background-color: ${props =>
    props.grayButton ? props.theme.Gray : props.theme.Yellow};
  padding: 10px 25px;
  text-decoration: none;
  border-radius: 20px;
  text-transform: uppercase;
  ${props =>
    props.color
      ? "color:" + props.theme.GetButtonTextColor(props.color) + ";"
      : ""}
  ${props =>
    props.color
      ? "background-color:" + props.theme.GetButtonBgColor(props.color) + ";"
      : ""}
  font-family: ${props => props.theme.Font};
  i {
    padding-left: 10px;
    position: relative;
    top: 1px;
  }
  span i,
  span {
    color: ${props => props.theme.Black};
  }
  &:disabled,&[disabled]{
    opacity: .75;
    background-color: ${props => props.theme.Gray};
    cursor: not-allowed;
  }
  
  ${props => props.theme.mediumBreakPoint} {
    ${props => (props.hiddenM ? "display: none;" : "")}
  }
  ${props => props.theme.smallBreakPoint} {
    ${props => (props.hiddenS ? "display: none;" : "")}
  }
`

/* 
          Texts
*/

const TitleBar = styled.div`
  background-color: ${props => props.theme.Black};
  color: ${props => props.theme.White};
  padding: 50px 0;
  text-align: center;
  p {
    font-size: 18px;
  }
`

const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
  line-height: 1.4;
`

const SubtitleSmall = styled.h2`
  font-family: ${props => props.theme.Font};
  font-size: 24px;
  font-weight: 600;
  ${props => (props.center ? "text-align:center" : "")}
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

const TextWrapper = styled.div`
  text-align: justify;
  ${props => (props.center ? "text-align: center;" : "")}
  padding-top: 40px;
  padding-bottom: 60px;
  * {
    font-family: ${props => props.theme.Font};
    text-align: justify;
    ${props => (props.center ? "text-align: center;" : "")}
  }
  h1 {
    font-size: 35px;
    font-weight: 500;
    line-height: 1.71;
  }
  h2 {
    font-size: 24px;
    font-weight: 500;
    font-style: italic;
    line-height: 1.33;
  }
  h3 {
    width: 108%;
    margin: 25px -4%;
    text-align: center;
  }
  h4 {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.56;
    margin: 0;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.56;
  }
  ol {
    padding: 30px 50px;
    list-style: none;
    counter-reset: li;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.56;
    font-style: italic;
    font-weight: 500;
  }
  ol li {
    counter-increment: li;
  }
  ol li::before {
    content: counter(li);
    color: ${props => props.theme.Yellow};
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  ${props => props.theme.mediumBreakPoint} {
    h3 {
      width: 100%;
      margin: 25px 0;
    }
  }
`

const Box = styled(Row)`
  box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.38);
  padding: 50px;
  box-sizing: border-box;
  margin-bottom: 40px;
  ${TextWrapper} {
    padding: 0;
    p {
      margin: 0;
    }
  }
`

const Form = styled.form`
  width: 100%;
  p {
    color: ${props => props.theme.Black};
    font-size: 24px;
    margin: 5px 0;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.theme.Black};
    padding: 10px 15px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }
  button {
    float: right;
    margin-right: 50px;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.White};
    background-color: ${props => props.theme.Yellow};
    padding: 10px 25px;
    text-decoration: none;
    border-radius: 20px;
    border: 0 none;
    text-transform: uppercase;
    min-width: 200px;
    color: ${props => props.theme.GetButtonTextColor("Yellow")};
    background-color: ${props => props.theme.GetButtonBgColor(props.color)};
  }
`

export {
  Wrapper,
  Content,
  Section,
  Container,
  Rows,
  Row,
  TitleBar,
  TextWrapper,
  Title,
  SubtitleSmall,
  Paragraph,
  Button,
  Box,
  Form,
}
