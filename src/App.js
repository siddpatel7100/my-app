import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './js/about';
import Home from './js/home';
import Nav from './js/nav';
import { useEffect, useState } from 'react';
import Test from './js/test';
import { ToDoContext } from './Contexts/toDoContext';

function App() {
const [tag,setTag] = useState("");
const [tagList,setTagList] = useState([]);



  return (
    <ToDoContext.Provider value={{tagList,setTagList,setTag,tag}}>
     
    <Router>
      <div className="App"> 
        <Nav />
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
       
      </div>
    </Router>
    </ToDoContext.Provider>
  );
}

export default App;
