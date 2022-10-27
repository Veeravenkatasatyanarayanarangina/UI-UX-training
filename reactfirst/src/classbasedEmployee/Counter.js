import React from "react";

class Counter extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            count :0
        }
    }

    increment =() =>
    {
        this.setState({count:this.state.count+1})
    }
    decrement =() =>
    {
        this.setState({count:this.state.count-1})
    }

    render()
    {
        return( <div>
            
            <h1>component is the class based component </h1>
            <h2>count : {this.state.count}</h2>

            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            
        </div>)
    }
}
export default Counter