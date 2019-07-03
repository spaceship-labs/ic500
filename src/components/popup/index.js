import React, { Component } from "react"
//import {  } from "../../theme/index.styled"
import { Overlay, Background, Popup } from "./index.styled"

class PopupComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { open: true }
  }
  toggle = () => {
    this.setState({ open: !this.state.open })
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
