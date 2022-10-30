import React from "react";
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import { Company } from "./Company";
import { Person } from "./Person";
import { User } from "./Users";

export function Day7Tasks()
{
    
        return(
            <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Motivity
        </a>
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
          <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/Person">Pesron</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
      { <Route path="/" element={<Company />}></Route> }
                <Route  path="company" element={<Company/>}></Route>
                <Route path="Person" element={<Person />}></Route>
                <Route path="users" element={<User />}></Route>

      </Routes>
            </BrowserRouter>
            
        )
    }
