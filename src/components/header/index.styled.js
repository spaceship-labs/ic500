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
  ${props => props.theme.mediumBreakPoint} {
    img {
      left: 60px;
    }
    &.small img {
      width: 100px;
    }
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
      visibility: hidden;
      opacity: 0;
    }
  }
  .showOnScroll {
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s;
  }
  &.minify {
    padding: 20px 2%;
    .showOnScroll {
      visibility: visible;
      opacity: 1;
    }
    ${Logo} {
      &.small {
        visibility: visible;
        opacity: 1;
      }
      visibility: hidden;
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
      font-size: 10px;
      padding: 10px;
      margin-left: 5px;
    }
    ${MenuItem} {
      font-size: 12px;
      padding: 10px;
    }
  }
`

const Burguer = styled.button`
  cursor: pointer;
  position: absolute;
  transition: all 0.5s;
  z-index: 102;
  top: 3px;
  left: 0;
  border: 0 none;
  width: 70px;
  height: 70px;
  display: none;
  i {
    display: block;
    top: 0px;
    left: 10px;
    width: 25px;
    height: 0px;
    border-bottom: 3px solid black;
    position: relative;
    border-radius: 10px;
    transition: all 0.2s;
    &:before {
      content: "";
      position: absolute;
      top: -12px;
      left: 0;
      width: 37px;
      border-top: 3px solid black;
      border-radius: 10px;
      transition: all 0.5s;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -15px;
      left: 0;
      width: 37px;
      border-top: 3px solid black;
      border-radius: 10px;
      transition: all 0.5s;
    }
  }
  &.open {
    i {
      width: 0;
      &:before {
        transform: rotate(45deg);
        transform-origin: left top 0;
        left: 9px;
      }
      &:after {
        transform: rotate(-45deg);
        transform-origin: left top 0;
        bottom: -17px;
        left: 6px;
      }
    }
  }
  ${props => props.theme.mediumBreakPoint} {
    display: inline-block;
  }
`

const DropdownMenu = styled.div`
  position: fixed;
  top: 73px;
  width: 100%;
  background-color: black;
  color: white;
  left: 0;
  padding: 50px 25px;
  box-sizing: border-box;
  visibility: hidden;
  opacity: 0;
  margin-top: -30px;
  transition: all 0.3s;
  &.open {
    margin-top: 0px;
    visibility: visible;
    opacity: 1;
  }
  .close {
    position: absolute;
    right: 15px;
    top: 15px;
    color: white;
    font-size: 25px;
    cursor: pointer;
  }
  ul {
    padding: 0;
    margin: 0;
    margin-bottom: 30px;
    list-style: none;
    a {
      display: block;
      padding: 5px 0;
      text-decoration: none;
      color: white;
      text-transform: uppercase;
      font-size: 18px;
      &:hover {
        color: ${props => props.theme.Yellow};
      }
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
  text-decoration: none;
  &:hover {
    background-color: ${props => props.theme.Yellow};
  }
`

export { Header, Logo, MenuItem, Menu, Burguer, DropdownMenu, Social }
