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
      <Word index={this.props.index} className="wow fadeInDown">
        <WordTitle>
          <a onClick={this.toggle}>
            {this.state.word.word.text}
            <i className={`icon-arrow${this.state.word.open ? " open" : ""}`} />
          </a>
        </WordTitle>
        <WordScreen>
          <WordHidden
            className={this.state.word.open ? "open" : ""}
            dangerouslySetInnerHTML={{
              __html: this.state.word.word_content.html,
            }}
          />
        </WordScreen>
      </Word>
    )
  }
}

export default WordComponent
