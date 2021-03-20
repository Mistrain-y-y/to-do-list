import React, { Component } from 'react'
import Item from './Item'
import "./style.css"

export default class List extends Component {
  render() {
    const { list, tickOrNot, removeCur } = this.props
    return (
      <ul>
        {
          list.map(item => <Item
            tickOrNot={tickOrNot}
            removeCur={removeCur}
            key={item.id}
            {...item}
          />)
        }
      </ul>
    )
  }
}
