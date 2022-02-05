import React from 'react'
import {Link } from "react-router-dom";
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

const Forgot = () => {
    return (
        <div>
            <Header />
            <div className='breadcrumbs'>
    <div className='container-fluid'>
    <div className='row align-items-center'>
    <div className='col-lg-6 col-md-6 col-12'>
    <div className='breadcrumbs-content'>
    <h1 className='page-title'>Forgot Password</h1>
    </div>
    </div>
    <div className='col-lg-6 col-md-6 col-12'>
    <ul className='breadcrumb-nav'>
    <li><Link className='nav-link' to="/">Home</Link></li>
    <li><i className='fal fa-angle-right text-center text-white'></i></li>
    <li>Forgot Password</li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    <div className='container-fluid mt-3 mb-3'>
        <div className='row'>
            <div className='col-sm-6 offset-sm-3'>
                <div className='card'>
                    <form>
                    <div className='input-group mb-3 mt-3 ps-4 pe-4'>
  <span className='input-group-text'><i className='fal fa-envelope'></i></span>
  <input type="text" className='form-control' placeholder="Enter Email"/>
</div>
                <div className='d-flex mb-3'>
                    <div className='col-sm-6 offset-sm-1'>
                    <button className='btn btn-primary'>Send my password</button>
                    </div>
                </div>
                    </form>
                <div className='d-flex justify-content-between'>
                    <Link className='userpage ps-4' to='/register'>Create Account</Link>
                    <Link className='userpage pe-4' to='/login'>Back to Login</Link>
                </div>
                </div>
            </div>
        </div>
    </div>
            <Footer />
        </div>
    )
}

export default Forgot;
