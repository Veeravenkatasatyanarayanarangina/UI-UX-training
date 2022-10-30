import React,{props,state}from "react";

export class Person extends React.Component
{
 
    constructor(props)
    {
        super(props);
        this.state = {
            Person:[
            {
                id:101,
                name :"satya",
                des:"developer",
                phno:"9121604072",
                mail:"satya@gmail.com"
            },
            {
                id:101,
                name :"satya",
                des:"developer",
                phno:"9121604072",
                mail:"satya@gmail.com"
            }
        ]
        }
    }
    static getDerivedStateFromProps()
    {
        console.log(props,state)
    }
    componentDidMount()
    {
        console.log("calling api")

    }
    render()
    {
        return(
            <div>
                {this.state.Person.map((s)=>
                (
                    <div><label>{s.name}</label>
                    <label>{s.id}</label></div>
                    
                ))}
                
            </div>
        )
    }
}