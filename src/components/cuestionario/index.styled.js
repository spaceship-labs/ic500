import styled from "styled-components"

const BannerTextBox = styled.div`
  padding: 20px 0 30px 0;
  * {
    color: ${props => props.theme.White};
  }
  h2 {
    font-family: ${props => props.theme.Font};
    font-size: 35px;
    font-weight: 500;
    line-height: 1.37;
  }
  p {
    font-family: ${props => props.theme.Font};
    font-size: 18px;
    line-height: 1.5;
    font-weight: 300;
    line-height: 1.5;
  }
`

const BannerImg = styled.div`
  flex: 0 1 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    max-width: 100%;
  }
  ${props => props.theme.mediumBreakPoint} {
    display: block;
    text-align: center;
    img {
      display: inline-block;
    }
  }
`

const TextWrapper = styled.div`
  text-align: center;
  padding: 50px 0;
  * {
    font-family: ${props => props.theme.Font};
  }
  img {
    max-width: 90%;
  }
  h1,
  h2 {
    font-size: 55px;
    font-weight: 500;
    line-height: 1.09;
  }
  h3 {
    font-size: 30px;
    font-weight: 500;
    line-height: 1.5;
  }
  h4 {
    font-size: 28px;
    font-weight: 300;
    line-height: 1.43;
  }
  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 3.06;
  }
  .bigIcon {
    font-size: 150px;
  }
`

const ResultsTest = styled(TextWrapper)`
  color: ${props => props.theme.White};
  h3 {
    font-size: 35px;
  }
  .result {
    margin: 0;
    font-size: 65px;
    color: ${props => props.theme.Yellow};
    font-weight: 500;
    line-height: 1.23;
  }
  .bigIcon {
    color: ${props => props.theme.Yellow};
  }
`

const Question = styled.div`
  flex: 0 1 auto;
  width: 50%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 25px 0;
  &:nth-child(odd) {
    padding-right: 65px;
  }
  &:nth-child(even) {
    padding-left: 40px;
    border-left: 3px solid ${props => props.theme.LGray};
  }
  img {
    max-width: 100%;
  }
  ${props => props.theme.mediumBreakPoint} {
    width: 100%;
    &:nth-child(odd) {
      padding-right: 0;
    }
    &:nth-child(even) {
      padding-left: 0;
      border-left: 0 none;
    }
    border-bottom: 3px solid ${props => props.theme.LGray};
  }
`

const QuestionTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  font-family: ${props => props.theme.Font};
  line-height: 1.33;
  span {
    padding: 0 15px 0 25px;
  }
`

const Answer = styled.button`
  font-size: 13px;
  font-family: ${props => props.theme.Font};
  font-style: italic;
  display: block;
  border: 0 none;
  background-color: transparent;
  padding: 5px 0;
  cursor: pointer;
  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 23px;
    height: 23px;
    box-sizing: border-box;
    border: 2px solid ${props => props.theme.Yellow};
    border-radius: 50%;
    margin-right: 10px;
  }
  &.active:before {
    background-color: ${props => props.theme.Yellow};
  }
`

export {
  BannerTextBox,
  BannerImg,
  TextWrapper,
  ResultsTest,
  Question,
  QuestionTitle,
  Answer,
}
