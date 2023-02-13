import logo from './logo.svg';
import {Routes, Route } from 'react-router-dom';
import Home from "./webpage/index.jsx";
function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
