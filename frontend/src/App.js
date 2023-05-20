import './App.css';
import {Routes,Route,Router} from 'react-router-dom';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import ForgetPass from './ForgetPass/ForgetPass';


function App() {
  return (
    <div className="App" id="appdiv"> 
     <Routes>
     <Route path='/' element={<Login/>} />
     <Route path="/signUp" element={<Signup/>} />
     <Route path="/forgetpassword" element={<ForgetPass/>} />
     </Routes>
    </div>
  );
}

export default App;
