import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import LetsStart from './Components/LetsStart/LetsStart';
import SingUp from './Components/SingUpPage/SingUp';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kakopoceti" element={<LetsStart />} />
        <Route path="/singup" element={<SingUp />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
