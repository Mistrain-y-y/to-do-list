import React, { Component } from 'react'
import './style.css'

export default class Item extends Component {
  state = {
    focused: false
  }
  enterOrLeave = flag => {
    this.setState({
      focused: flag
    })
  }
  render() {
    const { id, content, ticked, tickOrNot, removeCur } = this.props
    const { focused } = this.state
    const bgColor = focused ? "#eee" : "#fff"
    const showBtn = focused ? "block" : "none"
    return (
      <li
        onMouseEnter={() => this.enterOrLeave(true)}
        onMouseLeave={() => this.enterOrLeave(false)}
        style={{ backgroundColor: bgColor }}
      >
        <input type="checkbox" onChange={e => tickOrNot(e, id)} checked={ticked} /> {content}
        <button
          onClick={() => removeCur(id)}
          style={{ display: showBtn }}
          className="delete-btn"
        >delete</button>
      </li>
    )
  }
}
