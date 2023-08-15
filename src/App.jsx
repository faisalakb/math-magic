import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import DisplayApi from './components/displayApi';
import Home from './components/home';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quotes" element={<DisplayApi />} />
    </Routes>
  </BrowserRouter>
);

export default App;
