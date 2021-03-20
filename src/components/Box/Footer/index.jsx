import React, { Component } from 'react'
import "./style.css"

class Footer extends Component {
  render() {
    const { tickedCount, totalCount, removeAll, tickAllOrNot } = this.props
    return (
      <div className="footer">
        <input type="checkbox" checked={tickedCount === totalCount && totalCount !== 0} onChange={tickAllOrNot} />
        <span>已完成 {tickedCount}/ 全部 {totalCount}</span>
        <button onClick={removeAll}>delete all</button>
      </div>
    )
  }
}

export default Footer