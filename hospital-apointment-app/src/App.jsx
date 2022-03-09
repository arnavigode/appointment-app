import logo from './logo.svg';
import NavBar from './components/Navbar/NavBar';
import './App.css';
import Home from './components/Home/Home/Home';
// import Details from './components/Details/Details';
import Selectionpg from './components/SelectionPg/Selectionpg'
import AppointmentPg from './components/Appointment/AppointmentPg';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}> 
          </Route>
          <Route path="/select" element={<Selectionpg/>}> 
          </Route>
          <Route path="/appointment" element={<AppointmentPg/>}> 
          </Route>
        </Routes>
        <br/>
        
      </header>
    </div>
  );
}

export default App;
