import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Tracks from './components/pages/Tracks';
import Tires from './components/pages/Tires';
import Strategy from './components/pages/Strategy';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Tracks' exact element={<Tracks />} /> 
          <Route path='/Tires' exact element={<Tires />} />
          <Route path='/Strategy' exact element={<Strategy />} />
          <Route path='/sign-up' exact element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
