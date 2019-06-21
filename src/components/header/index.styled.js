import styled from "styled-components"
import { Button } from "../../theme/index.styled"

const Logo = styled.a`
  display: inline-block;
  transition: all 0.3s;
  position: absolute;
  left: 2%;
  img {
    left: 0px;
    position: absolute;
    transition: height 0.5s;
    width: 350px;
    ${props => props.theme.largeBreakPoint} {
    }
  }
  &.small img {
    width: 150px;
  }
  ${props => props.theme.smallBreakPoint} {
  }
`

const Header = styled.header`
  position: fixed;
  background-color: ${props => props.theme.White};
  width: 100%;
  padding: 40px 2%;
  transition: padding 0.5s;
  box-sizing: border-box;
  top: 0;
  left: 0;
  z-index: 100;
  ${Logo} {
    &.small {
      visivility: hidden;
      opacity: 0;
    }
  }
  .showOnScroll {
    visivility: hidden;
    opacity: 0;
    transition: all 0.3s;
  }
  &.minify {
    padding: 20px 2%;
    .showOnScroll {
      visivility: visible;
      opacity: 1;
    }
    ${Logo} {
      &.small {
        visivility: visible;
        opacity: 1;
      }
      visivility: hidden;
      opacity: 0;
    }
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
  :after {
    content: "";
    display: block;
    width: 0px;
    height: 2px;
    margin-top: 5px;
    margin-bottom: -5px;
    background-color: ${props => props.theme.Yellow};
    transition: width 0.3s;
  }
  &.active,
  &:hover {
    color: ${props => props.theme.Yellow};
    :after {
      width: 100%;
    }
  }
  ${props => props.theme.averageBreakPoint} {
    display: none;
  }
`

const Menu = styled.div`
  flex: 0 1 auto;
  ${Button} {
    margin-left: 15px;
  }
  &.minify {
    ${Button} {
      font-size: 11px;
    }
    ${MenuItem} {
      font-size: 12px;
      padding: 10px;
    }
  }
`

export { Header, Logo, MenuItem, Menu }
