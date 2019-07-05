import React, { Component } from "react"
import PropTypes from "prop-types"
import { Section, Container, Title3, Rows, Row } from "../../theme/index.styled"
import { Form, Button, ContactItem } from "./index.styled"

import { Context } from "../../languages/context"

class ContactComponent extends Component {
  render() {
    const returnUrlBase = this.props.location.origin
    return <p>a</p>
  }
}

ContactComponent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.shape({
      text: PropTypes.string,
    }),
  }),
}

export default ContactComponent
