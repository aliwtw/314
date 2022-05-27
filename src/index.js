import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './login/signIn';
import SignUp from './login/signUp';
import ForgotPass from './login/forgotPass';
import UserMain from './UserPath/UserMain';
import Services from './UserPath/Services';

import Test from './components/testAuth'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="forgot-pass" element={<ForgotPass />}/>
      <Route path="user" element={<UserMain />} />
      <Route path="user/services" element={<Services />}/>
      <Route path="test" element={<Test />} />
    </Routes>
  </BrowserRouter>
);

