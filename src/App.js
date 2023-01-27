import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Edit from './Component/Edit'
import Home from './Component/Home'
import Student from './Component/Student'
import About from './Component/About'



const App = () => {
  return (
    <div>
      <h1>Surya</h1>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/student' element={<Student/>}/>
          <Route path='/student/edit' element={<Edit/>}></Route>
          <Route path='/about' element={<About/>}> </Route>
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App