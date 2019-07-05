import React, { Component } from "react"
import { Rows, Row } from "../../theme/index.styled"
import { Form, Button } from "./index.styled"
import queryString from "query-string"

class ContactFormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openConfirm: false,
    }
  }
  componentDidMount() {
    const showConfirm =
      queryString.parse(this.props.location.search).success === "ok"
    this.setState({ openConfirm: showConfirm })
  }
  render() {
    const returnUrlBase = this.props.location.origin
    return (
      <Form
        action={`https://formspree.io/erick@spaceshiplabs.com`}
        method="POST"
      >
        as
      </Form>
    )
  }
}

export default ContactFormComponent
