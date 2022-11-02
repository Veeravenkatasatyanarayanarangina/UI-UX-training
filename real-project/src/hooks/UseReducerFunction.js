import React, { useReducer } from 'react'

const intialstate={
    count:0
};
function reducer(state,action)
{
    switch(action.type)
    {
        case 'increment':
            return {count:state.count+1};
        case 'decrement': return {count:state.count-1};
        case 'reset':return{count:0};
        default :throw new state.error();

    }
}


export const UseReducerFunction = () => {
  
    const [state,dispatch]= useReducer(reducer,intialstate);
  return (
    <div>UseReducerFunction

        <h1>{state.count}</h1>

        <button onClick={()=>dispatch({type:'increment'})}>+</button>
        <button onClick={()=>dispatch({type:'decrement'})}>-</button>
        <button onClick ={()=> dispatch({type:'reset'})}>reset</button>
    </div>
  )
}
