import React, { useState } from 'react'
import Child from "./Child"

const Parent = () => {

    const [count, setCount] = useState(0);
  return (
    <div>
        
        <h1>count parent :{count}</h1>
        <Child count = {count}  name = {setCount}></Child>
    </div>
  )
}

export default Parent
