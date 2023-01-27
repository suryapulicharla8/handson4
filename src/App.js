import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Component/About';
import Edit from './Component/Edit';
// import Forms from './Component/Forms';
import Home from './Component/Home';
import Student from './Component/Student';
import Header from './HeadFoot/Header';


function App (){
  return (
    <div>
      
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/student" element={<Student />}/>
      <Route path="/student/edit" element={<Edit />}/>
      {/* <Route path="/student/forms" element={<Forms />}/> */}
      <Route path="/about" element={<About />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App