import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { Login } from "./Login.jsx";
import {Home} from "./Home.jsx";
function App() {

  return (
    <>
    <Router>
      <nav>
        <Link to="/">Login</Link>
      </nav>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
    </Router>
    </>
  )
}

export default App
