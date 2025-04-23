import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './views/LandingPage/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />        
      </Routes>
    </BrowserRouter> 
  );
}

export default App;