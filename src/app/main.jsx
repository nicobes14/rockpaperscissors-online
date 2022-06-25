import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './globals.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GameOffline from './pages/gameOffline/GameOffline';
import LoginPage from './pages/login/Login';
import MultiplayerHome from './pages/multiplayer/MultiplayerHome';
import RegisterPage from './pages/register/Register';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/gameoffline" element={<GameOffline />}></Route>
        <Route path="game" element ={<MultiplayerHome/>}></Route>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.querySelector('#root')
);
