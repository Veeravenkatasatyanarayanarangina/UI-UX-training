import React from "react";


class Counter extends React.Component
{
    // constructor(props)
    // {
    //     super(props)
    //     this.state = {
    //         count :0
    //     }
    // }

    // increment =() =>
    // {
    //     this.setState({count:this.state.count+1})
    // }
    // decrement =() =>
    // {
    //     this.setState({count:this.state.count-1})
    // }

    // render()
    // {
    //     return( <div>
            
    //         <h1>component is the class based component </h1>
    //         <h2>count : {this.state.count}</h2>

    //         <button onClick={this.increment}>Increment</button>
    //         <button onClick={this.decrement}>Decrement</button>
            
    //     </div>)
    // }

    state={
        count :0,
       // imageUrl:"https://picsum.photos/560"
    }
    render()
    {
        return(
        <div>
            {/* <img src={this.state.imageUrl} alt="null"/> */}
            <span className="badge badge-primary m-2">{this.formatcounter()}</span>
            <button>Increment</button>

        </div>
        );
    }
    formatcounter()
    {
        const {count} = this.state;
        return count===0 ? "zero" : count;
    }
}
export default Counter