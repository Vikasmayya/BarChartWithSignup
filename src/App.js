import React from "react";
import { Route, Routes } from 'react-router';
import Dashboard from "./Dashboard";
import Home from "./Home";

function App() {
  return (
    <>
     <Routes>
        <Route exact path ='/' element={<Home/>}/>
        <Route exact path ='/dashboard' element={<Dashboard/>}/>
     </Routes>
    </>
  );
}

export default App;