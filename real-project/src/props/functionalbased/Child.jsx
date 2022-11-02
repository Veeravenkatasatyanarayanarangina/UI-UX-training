import React, { useState } from 'react'

 const Child = (props) => 
{
  const[cc,setCc] = useState(props.count);
  props.name(cc)
   
  return (

    <div>

        { <button onClick={()=>setCc(cc+1)}>increment</button> }
    </div>
  )
}
export default Child
