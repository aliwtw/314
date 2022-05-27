import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './login/signIn';
import ServiceSignIn from './login/serviceLogin';
import SignUp from './login/signUp';
import ForgotPass from './login/forgotPass';
import UserMain from './UserPath/UserMain';
import Services from './UserPath/Services';
import ServiceMain from './ServiceCentrePath/ServiceMain';
import ServiceUser from './ServiceCentrePath/userList';
import CentreServices from './ServiceCentrePath/userDetail';
import CentreAccept from './ServiceCentrePath/notify';
import CentreNotify from './ServiceCentrePath/notifiedPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="signin" element={<SignIn />} />
	  <Route path="serviceLogin" element={<ServiceSignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="forgot-pass" element={<ForgotPass />}/>
      <Route path="user" element={<UserMain />} />
      <Route path="user/services" element={<Services />}/>
	  <Route path="service" element={<ServiceMain/>}/>
	  <Route path="service/userList" element={<ServiceUser/>}/>
	  <Route path="service/userList/services" element={<CentreServices/>}/>
	  <Route path="service/servicesAccept" element={<CentreAccept/>}/>
	  <Route path="service/servicesAccept/servicesNotify" element={<CentreNotify/>}/>
    </Routes>
  </BrowserRouter>
);