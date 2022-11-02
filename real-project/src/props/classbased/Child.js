import React, { Component } from 'react'

export default class Child extends Component {

   constructor(props)
   {
    super(props)
    this.state = 
    {
        name :"hai child class",
        name2:true

    }
   }
   changeName(event)
   {
    this.setState({name:event.target.value})

   }
   
    componentDidMount()
    {
        console.log("did munt")
       
        
    }
  render() {
    return (
       
      <div>
       <h2>{this.state.name}</h2>
        <button onClick={(e)=>this.changeName(e)} value = {this.props.name}>change name</button>
        </div>
    )
  }
}
