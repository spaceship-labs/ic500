import styled from "styled-components"

const Header = styled.header`
  position: relative;
  width: 100%;
  padding: 40px 0;
  transition: padding 0.5s;
  box-sizing: border-box;
  top: 0;
  left: 0;
  z-index: 100;
  ${props => props.theme.largeBreakPoint} {
  }
`

const Logo = styled.a`
  display: inline-block;
  img {
    transition: height 0.5s;
    width: 350px;
    ${props => props.theme.largeBreakPoint} {
      width: 400px;
    }
  }
  ${props => props.theme.smallBreakPoint} {
  }
`

const MenuItem = styled.a`
  display: inline-block;
  font-family: ${props => props.theme.Font};
  padding: 15px 15px;
  color: ${props => props.theme.Gray};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  &:hover {
  }
`

const Menu = styled.div`
  flex: 0 1 auto;
`

export { Header, Logo, MenuItem, Menu }
