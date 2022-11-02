import React, { useState} from 'react';


function Counter() {

    const[color,setColor]=useState();



  return (
    <>
    <div>
<h1> use state</h1>
       {color!=="red"&&<button onClick={()=>setColor("red")}>red</button>}
        {color !== "blue" && <button onClick={()=>setColor("blue")}>blue</button>}
        <h1>{color}</h1>
    </div>
    <div>
        <h1>use effect </h1>


    </div>
    </>
  )
}

export default Counter