import React from 'react'

 class Home extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            show :true,
            count :0
        }
    }
    delHeader = () =>{
        this.setState({show:false})
    }

    componentDidMount()
    {
        console.log("component did mount...................")
    }
    componentDidUpdate()
    {
        console.log("compoentdidUpdate.........................")
    }
  render() {
    let myHeader;
    if(this.state.show){
        myHeader = <Child></Child>;
    };
    return (

      <div>
        <center>
        {myHeader}
        <button onClick={this.delHeader}> delete header</button>
        <hr></hr>
        <h3>{this.state.count}</h3>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
        </center>
      </div>
    )
  }
}


 class Child extends React.Component {
    componentWillUnmount()
    {
        console.log("this.componentWillUnmount")
    }
  render() {
    return (
      <div>Home</div>
    )
  }
}
export default Home

