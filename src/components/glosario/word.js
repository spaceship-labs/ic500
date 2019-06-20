import React, { Component } from "react"
import { Word, WordTitle, WordScreen, WordHidden } from "./index.styled"

class WordComponent extends Component {
  constructor(props) {
    super(props)
    const word = { ...props.word, open: this.props.index === 0 ? true : false }
    this.state = { word }
  }
  toggle = () => {
    const word = { ...this.state.word, open: !this.state.word.open }
    console.log(word)
    this.setState({ word })
  }
  render() {
    return (
      <Word>
        <WordTitle>
          <a onClick={this.toggle}>
            {this.state.word.title}
            <i className={`icon-arrow${this.state.word.open ? " open" : ""}`} />
          </a>
        </WordTitle>
        <WordScreen>
          <WordHidden className={this.state.word.open ? "open" : ""}>
            {this.state.word.content}
          </WordHidden>
        </WordScreen>
      </Word>
    )
  }
}

export default WordComponent
