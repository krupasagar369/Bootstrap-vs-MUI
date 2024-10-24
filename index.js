import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Login } from './components/login/login';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import bootstrap from 'bootstrap';
import { DataBinding } from './components/data-binding/data-binding';
import { NasaAPI } from './components/nasaapi/nasa-api';
import { MouseDemo } from './components/mouse/mobile';
import { MOuseOver } from './components/mouseover/mouse-animation';
import { FormDemo } from './components/forms_demo/form';
import { ClassDataBinding } from './components/fackstore/fackstore';
import { ClassFromDemo } from './components/data-binding/class-form-demo';
import { MuiDemo } from './components/fackstore/mui-demo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MuiDemo/>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
