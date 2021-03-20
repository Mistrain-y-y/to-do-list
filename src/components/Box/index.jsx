import React, { Component } from 'react'
import "./style.css"
import Input from './Input'
import List from './List'
import Footer from './Footer'

export default class Box extends Component {
  state = {
    list: [
      { id: "01", content: "hello react", ticked: false },
      { id: "02", content: "coding", ticked: false },
      { id: "03", content: "i love dinosaur", ticked: false },
    ]
  }
  addItem = item => {
    this.setState({
      list: [item, ...this.state.list]
    })
  }
  tickOrNot = (e, id) => {
    const newList = this.state.list.map(item => {
      if (item.id === id) {
        return { ...item, ticked: e.target.checked }
      }
      return item
    })
    this.setState({ list: newList })
  }
  removeCur = id => {
    if (window.confirm(`确定删除${this.state.list.filter(item => item.id === id)[0].content}吗？`)) {
      const newList = this.state.list.filter(item => item.id !== id)
      this.setState({ list: newList })
    }
  }
  removeAll = () => {
    const { list } = this.state
    const newList = list.filter(item => item.ticked === false)
    if (newList.length === list.length) {
      alert("当前没有选择任何项目。")
    } else if (window.confirm("确定删除所有已选吗？")) {
      this.setState({
        list: newList
      })
    }
  }
  tickAllOrNot = e => {
    const newList = this.state.list.map(item => ({...item, ticked: e.target.checked}))
    this.setState({
      list: newList
    })
  }
  render() {
    const { list } = this.state
    const tickedCount = list.filter(item => item.ticked).length
    const totalCount = list.length
    return (
      <div className="box">
        <Input addItem={this.addItem} />
        <List list={list} tickOrNot={this.tickOrNot} removeCur={this.removeCur} />
        <Footer
          tickedCount={tickedCount}
          totalCount={totalCount}
          removeAll={this.removeAll}
          tickAllOrNot={this.tickAllOrNot}
        />
      </div>
    )
  }
}
