import React,{useState,useEffect} from 'react'

const FormLocs = () => {
    const[name,setName] =useState('');
   




  return (
    <div>
 <form>
              <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  aria-label="fullname"
              />
              <input type="submit" value="Submit"></input>
          </form>

    </div>
  )
}

export default FormLocs