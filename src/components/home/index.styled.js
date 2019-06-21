import styled from "styled-components"
import { Paragraph } from "../../theme/index.styled"

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
  justify-content: flex-end;
  img {
    width: auto;
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

const ContentText = styled.div`
  text-align: center;
  h1 {
    font-size: 35px;
    font-weight: 500;
    line-height: 1.71;
  }
  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
  }
  h3 {
    width: 108%;
    margin: 25px -4%;
    text-align: center;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.56;
  }
  ${Paragraph} {
    text-align: center;
  }
  img {
    margin: 10px 20px;
  }
`

const DownloadLinks = styled.div`
  padding: 70px 0;
  text-align: center;
`

const ChartsContent = styled.div`
  text-align: center;
  img {
    max-width: 100%;
    margin: 40px 0;
  }
  p {
    font-family: ${props => props.theme.Font};
    font-size: 16px;
    font-weight: 600;
    margin: 30px 0;
  }
`

export { BannerTextBox, BannerImg, ContentText, DownloadLinks, ChartsContent }
