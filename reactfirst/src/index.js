import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from "./classbasedEmployee/Counter";
import CounterFunction from './classbasedEmployee/CounterFunction';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Employees from './classbasedEmployee/Employee';
//import MyComponent from './student-components/lazyloading/example1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <div>
    
    {/* <h1>Class Based Component.........</h1> 
    <Counter />
    <h1>counter with functional.........</h1>
    <CounterFunction/> */}
    <Employees/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
