
import './App.css';

import Company from './components/Company'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
function App() {
  
  const [jobOffers, setJobOffers] = useState([]);
  
  return (
    <div className="App">
      <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home jobOffers={jobOffers} setJobOffers={setJobOffers}/>}></Route>
        <Route path="/:company" element={<Company />}></Route>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
