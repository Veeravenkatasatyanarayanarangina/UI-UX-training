import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state = {
        name : "hai hello parent"
    }
  render() {
    return (
      <div>
        <h1>hai</h1>
      <Child name = {this.state.name}/>
      </div>
      
    )
  }
}
