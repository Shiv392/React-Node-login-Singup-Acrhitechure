import './App.css';
import {Routes,Route,Router} from 'react-router-dom';
import Signup from './Signup/Signup';
import Login from './Login/Login';


function App() {
  return (
    <div className="App" id="appdiv"> 
     <Routes>
     <Route path='/' element={<Signup/>} />
     <Route path="/login" element={<Login/>} />
     </Routes>
    </div>
  );
}

export default App;
