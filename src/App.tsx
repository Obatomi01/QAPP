import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import FeaturePage from './pages/FeaturePage';
import DemoPage from './pages/DemoPage';
import AccountPage from './pages/AccountPage';
import NewPassword from './pages/NewPassword';
import BanklLogin from './pages/BankLogin';
import LoginOptions from './pages/LoginOptions';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginOptions />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/feature' element={<FeaturePage />} />
        <Route path='/request-a-demo' element={<DemoPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/new-password' element={<NewPassword />} />
        <Route path='/bank-login' element={<BanklLogin />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
