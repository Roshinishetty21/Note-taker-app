import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Signin from "./Components/Signin";


function App(){
    return(
     <div>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/Navbar" element={<Navbar/>}></Route>
        </Routes>
        
      </BrowserRouter>
    
     </div>
    )
}
export default App;