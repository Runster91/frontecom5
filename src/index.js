import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Routes, RouterProvider, Route } from 'react-router-dom'; // Move this import to the top
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menu from "../src/pages/Menu.js";
import About from "../src/pages/About.js";
import Contact from "../src/pages/Contact.js";
import Home from "../src/pages/Home.js";
import Login from "../src/pages/Login.js";
import Newproduct from './pages/Newproduct';
import Signup from '../src/pages/Signup';
import Logout from '../src/pages/Logout';
import {Provider} from "react-redux"
import { store } from './redux/index.js';

const router =createBrowserRouter(
  createRoutesFromElements(
  <Route path= '/' element={<App/>}>
    <Route index element={<Home/>}/>
    <Route path='menu' element={<Menu/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='login' element={<Login/>}/> 
    <Route path='newproduct' element={<Newproduct/>}/>   
    <Route path='signup' element={<Signup/>}/>
    <Route path='logout' element={<Logout/>}/>

  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 <RouterProvider router={router}/>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
