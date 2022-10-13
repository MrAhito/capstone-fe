import React from 'react'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import  './css/styles.css';
import ApplyPage from './pages/ApplyPage';


function App() {
  return (
    <Container fluid='xl' className="p-0">
    <Router>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/apply" element={<ApplyPage />}></Route>
        </Routes>
    </Router>
    </Container>
  )
}

export default App