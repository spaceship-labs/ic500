import styled from "styled-components"

const Footer = styled.footer`
  background-color: ${props => props.theme.Black};
  display: block;
  padding: 40px 10px;
  text-align: center;
  img {
    height: 60px;
    width: auto;
    max-width: 90%;
    margin: 10px 10px;
  }
`

const Logo = styled.a`
  display: inline-block;
  max-width: ${props => (props.size ? props.size : 300)}px;
  img {
    width: ${props => (props.labeled ? 45 : 100)}%;
    height: auto;
    display: inline-block;
    margin: 0;
    vertical-align: middle;
  }
  span {
    width: ${props => (props.labeled ? 50 : 100)}%;
    font-size: 12px;
    display: inline-block;
    color: ${props => props.theme.White};
    vertical-align: middle;
    padding: 0 10px;
    box-sizing: border-box;
  }
  ${props => props.theme.mediumBreakPoint} {
    padding: 10px 25px;
  }
  ${props => props.theme.smallBreakPoint} {
    max-width: 50%;
  }
  ${props => props.theme.extraSmallBreakPoint} {
    max-width: ${props => (props.labeled ? "100%" : "auto")};
    margin: 0 auto;
  }
`

const SmallMenu = styled.ul`
  list-style: none;
  padding: 0;
  li,
  a {
    text-align: right;
    padding: 3px 0px;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 11px;
    letter-spacing: 2.2px;
    line-height: 1.33;
    color: ${props => props.theme.White};
  }
  a[href]:hover {
    color: ${props => props.theme.Yellow};
  }
  ${props => props.theme.mediumBreakPoint} {
    li,
    a {
      text-align: center;
    }
  }
`

const Social = styled.a`
  display: inline-block;
  transition: background 0.3s;
  width: 40px;
  height: 40px;
  text-align: center;
  box-sizing: border-box;
  padding: 9px;
  border-radius: 50%;
  background-color: ${props => props.theme.Gray};
  color: ${props => props.theme.Black};
  font-size: 22px;
  margin-right: 20px;
  margin-top: 25px;
  margin-bottom: 25px;
  text-decoration: none;
  &:hover {
    background-color: ${props => props.theme.Yellow};
  }
  ${props => props.theme.mediumBreakPoint} {
    margin: 25px 5%;
  }
`

const Separation = styled.div`
  flex: 0 1 1px;
  max-width: 1px;
  height: 50px;
  background-color: ${props => props.theme.White};
  margin: 0 10px;
  ${props => props.theme.smallBreakPoint} {
    margin: 10px;
    ${props => (props.hideS ? "display: none;" : "")}
  }
  ${props => props.theme.extraSmallBreakPoint} {
    display: none;
  }
`

const Label = styled.div`
  flex: 0 1 30%;
  max-width: 30%;
  padding-left: 20px;
  p {
    color: ${props => props.theme.White};
    font-size: 12px;
  }
  ${props => props.theme.extraSmallBreakPoint} {
    flex: 0 1 100%;
    max-width: 100%;
  }
`

export { Footer, Logo, SmallMenu, Social, Separation, Label }
