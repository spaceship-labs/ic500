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
    width: 100%;
    height: auto;
  }
  ${props => props.theme.mediumBreakPoint} {
    padding: 10px 25px;
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

export { Footer, Logo, SmallMenu, Social }
