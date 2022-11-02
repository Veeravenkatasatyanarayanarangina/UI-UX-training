import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap.css'

import { Link } from 'react-router-dom';



const Nav = () => {
   var intialstate={
        url:[
            {
                name:"HOOKS",
                value:"/hooks"
            }
        ]
    
    }
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
<a href='/'>NavBar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to = "/counter">Counter </Link>
      </li>
      <li className="nav-item">
        <Link to = "/hooks"className="nav-link">Hooks</Link>
      </li>
      <li className="nav-item">
      <Link to = "/parent"className="nav-link">Parent</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Nav