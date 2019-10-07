import React, { Component } from "react"
//import {  } from "../../theme/index.styled"
import { Overlay, Background, Popup } from "./index.styled"

class PopupComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }
  componentDidMount() {
    const c = this.getCookie("ic500")
    //console.log("Cookie", c)
    if (!c) {
      this.setState({ open: true })
      this.setCookie()
    }
    const cc = this.getCookie("ic500")
    //console.log("Cookie", cc)
  }
  toggle = () => {
    this.setState({ open: !this.state.open })
  }
  getCookie = name => {
    var nameEQ = name + "="
    var ca = document.cookie.split(";")
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == " ") c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }
  setCookie = () => {
    let d = new Date()
    d.setTime(d.getTime() + 360 * 24 * 60 * 60 * 1000)
    const expires = "expires=" + d.toUTCString()
    document.cookie = `ic500=true;${expires};path=/`
  }
  render() {
    const content = this.props.content
    return (
      <Overlay className={this.state.open ? "open" : ""}>
        <Background onClick={this.toggle} />
        <Popup>
          <i className="close icon-close" onClick={this.toggle} />
          <p>
            <i className="icon-warning" />
          </p>
          <div dangerouslySetInnerHTML={{ __html: content.html }} />
        </Popup>
      </Overlay>
    )
  }
}

export default PopupComponent
