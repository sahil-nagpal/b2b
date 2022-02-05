import React from 'react';
import {Link } from "react-router-dom";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Login = () => {
    return (
        <>
        <Header />
        <div className='breadcrumbs'>
    <div className='container-fluid'>
    <div className='row align-items-center'>
    <div className='col-lg-6 col-md-6 col-12'>
    <div className='breadcrumbs-content'>
    <h1 className='page-title'>Login</h1>
    </div>
    </div>
    <div className='col-lg-6 col-md-6 col-12'>
    <ul className='breadcrumb-nav'>
    <li><Link className='nav-link' to="/">Home</Link></li>
    <li><i className='fal fa-angle-right text-center text-white'></i></li>
    <li>Login</li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    <div className='container-fluid mt-3 mb-5'>
      <div className='row'>
        <div className='col-sm-7 offset-sm-3'>
          <div className='card'>
          <form>
          <div className='input-group mb-3 mt-3 ps-4 pe-4'>
  <span className='input-group-text'><i className='fal fa-envelope'></i></span>
  <input type="text" className='form-control' placeholder="Enter Email or Mobile"/>
</div>
<div className='input-group mb-3 mt-3 ps-4 pe-4'>
  <span className='input-group-text'><i className='fal fa-lock'></i></span>
  <input type="password" className='form-control' placeholder="Enter Password"/>
</div>
<div className='d-flex mb-3'>
<div class="col-sm-4 offset-sm-1">
  <button type="submit" className='btn btn-primary'>Login</button>
  </div>
  <div class="col-sm-6 mb-3 offset-sm-1">New User &nbsp;
  <Link className='userpage' to='/register'>Create Account</Link>&nbsp;&nbsp;<Link className='userpage' to='/forgot-password'>Forgot Password</Link>
  </div>
  </div>
</form>
          </div> 
        </div>
      </div>
    </div>
        <Footer />
        </>
    )
}

export default Login;
