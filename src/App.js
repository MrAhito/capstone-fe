import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import  './css/styles.css';


function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
        </Routes>
    </Router>
  )
}

export default App