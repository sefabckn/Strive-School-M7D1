
import './App.css';
import MyNavbar from './components/MyNavbar';
import reactDom from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
