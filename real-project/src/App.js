
import './App.css';
// import Hooks from './hooks/Hooks';
// import Nav from './router/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import FormLocs from './practice/FormLocs';
// import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import Counter from './components/Counter'
// import Parent from './props/functionalbased/Parent';


function App() {
  return (
    <div className="App">
    {/* <BrowserRouter>
    <Nav></Nav>
    <Routes>
      
      <Route path='/counter' element ={<Counter></Counter>}/>
      <Route path = '/hooks' element = {<Hooks></Hooks>}/>
      <Route path = '/parent' element = {<Parent></Parent>}/>


     
    </Routes>
    </BrowserRouter>
       */}
       {/* <Parent/> */}
   <FormLocs/>
    </div>
  );
}

export default App;
