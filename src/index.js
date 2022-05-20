import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './pages/mainPage.js';
import reportWebVitals from './reportWebVitals';
import TestAuth from './components/testAuth';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Banner from './components/header_banner/banner';
import Login from './pages/loginPage/loginPage';
import ServiceLogin from './pages/serviceLoginPage/loginPage';
import ServiceMenu from './pages/servicesMenu/servicesMenu';
import SignUp from './pages/registerPage/registerPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/services' component={ServiceMenu} />
        <Route path='/test' component={TestAuth} />
        <Route path='/' component={Main} />
		<Route path='/sign-up' component={SignUp} />
		<Route path='/serviceLogin' component={ServiceLogin}/>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Banner />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
