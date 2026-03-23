import {Routes,Route } from 'react-router-dom'
import './App.css'
import { Login } from "./Login.jsx";
import {Home} from "./Home.jsx";
function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
