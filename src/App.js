import React from 'react';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ColorName from './pages/ColorName';
import SliderValue from './pages/SliderValue';
import Container from '@mui/material/Container';
import './style.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color-name" element={<ColorName />} />
          <Route path="/slider-value" element={<SliderValue />} />
        </Routes>
      </Container>
    </>
  );
}
