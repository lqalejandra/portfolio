import React from 'react';
import LeLayout from './components/LeLayout';
import './style/App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import FrontPage from "./pages/FrontPage";

function App() {
  return (
    <div className="App">
     <LeLayout />
     <BrowserRouter>
        <Routes>
          <Route path="/"      element={<App/>}/>
          <Route index element={<FrontPage/>}/>
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/works" element={<Works />} />
          
          <Route path="/" element={<Works/>} />
          <Route index element={<Works/>} /> */}
          {/* <Route path="/2D" element={<Twodee/>} />
          <Route path="/3D" element={<Threedee/>} />
          <Route path="/code" element={<Code/>} />
          <Route path="/sketchbook" element={<Sketchbook/>} /> */}

      
        </Routes>

        
      </BrowserRouter>




    </div>
  );
}

export default App;
