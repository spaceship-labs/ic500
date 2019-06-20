import styled from "styled-components"

const Word = styled.div`
  ${props =>
    props.index > 0 ? "border-top: 3px solid " + props.theme.LGray + ";" : ""}
`

const WordTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  font-family: ${props => props.theme.Font};
  cursor: pointer;
  a {
    display: block;
  }
  i {
    float: right;
    color: ${props => props.theme.Yellow};
    transition: transform 0.3s;
    &.open {
      transform: rotate(180deg);
    }
  }
`

const WordScreen = styled.div`
  display: block;
  overflow: hidden;
  p {
    font-family: ${props => props.theme.Font};
    font-size: 16px;
    line-height: 1.56;
    text-align: justify;
  }
`

const WordHidden = styled.div`
  margin-top: -100%;
  padding: 15px;
  transition: margin-top 0.9s;
  &.open {
    margin-top: 0;
  }
`

export { Word, WordTitle, WordScreen, WordHidden }
