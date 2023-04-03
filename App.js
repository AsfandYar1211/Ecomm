import React from "react";
import "./App.css"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./Pages/About";
import { Contact } from "./Pages/Contact";
import Home from "./Pages/Home";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        < Route path="/" element={<Home/>}/>
        < Route path="/About" element={<About/>}/>
        < Route path="/Contact" element={<Contact/>}/>
        
      </Route>
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
