import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './components/Profile';

function App() {
  return (
    <>
     <div className="App">
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/manage' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
     </div>
    </>
  );
}

export default App;
