import React ,{useState,useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Forgot from './pages/Forgot';
import Covid19 from './pages/Covid19';
import Medical from './pages/Medical';
import Scientific from './pages/Scientific';
import Hsupplies from './pages/Hsupplies';
import Subsribe from './pages/Subscribe';
import Leads from './pages/Leads';
import Alertlead from './pages/Alertlead';
import { useSelector, useDispatch } from 'react-redux';
import {fetchCities} from './store/siteSlice';
import './style.css'
const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCities())
  },[])
  return (
     <>
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/post-your-requirements' element={<Leads/>}></Route>
      <Route exact path='/subscribe-lead-alert' element={<Alertlead/>}></Route>
      <Route exact path='/covid-19-essentials' element={<Covid19/>}></Route>
      <Route exact path='/medical-healthcare-services' element={<Medical/>}></Route>
      <Route exact path='/scientific-laboratory-services' element={<Scientific/>}></Route>
      <Route exact path='/home-supplies' element={<Hsupplies/>}></Route>
      <Route exact path='/subscribe-trade-alerts' element={<Subsribe/>}></Route>
      <Route exact path='/register' element={<Register/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/forgot-password' element={<Forgot/>}></Route>
    </Routes>
     </>
  );
};

export default App;
