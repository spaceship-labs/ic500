import styled from "styled-components"

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s;
  &.open {
    visibility: visible;
    opacity: 1;
  }
`

const Background = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

const Popup = styled.div`
  flex: 1 0 auto;
  width: 95%;
  max-width: ${props => props.theme.ContainerMedium}px;
  background-color: white;
  box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.38);
  padding: 50px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  text-align: center;
  i {
    font-size: 70px;
    color: ${props => props.theme.Yellow};
  }
  .close {
    color: black;
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 18px;
    cursor: pointer;
  }
  h2 {
    margin: 30px 0;
    font-size: 25px;
  }
  p {
    font-size: 16px;
    line-height: 1.7;
  }
  ${props => props.theme.smallBreakPoint} {
    width: 95%;
    max-width: 95%;
    padding: 5%;
  }
`

export { Overlay, Background, Popup }
