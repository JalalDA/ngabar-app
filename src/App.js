import Home from "./pages/home/Home";
import Register from './pages/auth/Register'
import Surat from './pages/surat/Surat'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    // <div className="App">
    //   <Home/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register/id" element={<Register/>}/>
        <Route path="/surat/:id" element={<Surat/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
