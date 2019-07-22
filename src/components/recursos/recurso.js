import React, { Component } from "react"
import { Resource } from "./index.styled"
import { Button } from "../../theme/index.styled"

class RecursoComponent extends Component {
  render() {
    const { cover, resource_title, resource_url } = this.props.resource
    return (
      <Resource className="wow fadeInUp">
        <p>
          <img src={cover.url} />
        </p>
        <p>{resource_title.text}</p>
        <p>
          <Button href={resource_url.url} target="_blank">
            Descagar
          </Button>
        </p>
      </Resource>
    )
  }
}

export default RecursoComponent
