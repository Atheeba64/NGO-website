import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Causes from './pages/Causes';
import VolunteerForm from './pages/VolunteerForm';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
