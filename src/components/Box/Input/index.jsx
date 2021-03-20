import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import "./style.css"

export default class Input extends Component {
  keyEnter = e => {
    if (e.keyCode === 13) {
      const item = {
        id: nanoid(),
        content: this.input.value,
        ticked: false
      }
      this.props.addItem(item)
    }
  }
  render() {
    return (
      <input
        onKeyDown={this.keyEnter}
        ref={cur => this.input = cur}
        className="text"
        type="text"
      />
    )
  }
}
