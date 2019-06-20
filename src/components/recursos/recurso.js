import React, { Component } from "react"
import { Resource } from "./index.styled"
import { Button } from "../../theme/index.styled"
import politica from "../../theme/images/la_politica.jpg"

class RecursoComponent extends Component {
  render() {
    return (
      <Resource>
        <p>
          <img src={politica} />
        </p>
        <p>
          Building Corporate Integrity Systems To Address Corruption Risks
          Transparencia Internacional
        </p>
        <p>
          <Button>Descagar</Button>
        </p>
      </Resource>
    )
  }
}

export default RecursoComponent
