import React from 'react'
import {Link } from "react-router-dom";
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

const Covid19 = () => {
    return (
        <>
         <Header />
         <div className='breadcrumbs'>
    <div className='container-fluid'>
    <div className='row align-items-center'>
    <div className='col-lg-6 col-md-6 col-12'>
    <div className='breadcrumbs-content'>
    <h1 className='page-title'>Covid 19 Essentials</h1>
    </div>
    </div>
    <div className='col-lg-6 col-md-6 col-12'>
    <ul className='breadcrumb-nav'>
    <li><Link className='nav-link' to="/">Home</Link></li>
    <li><i className='fal fa-angle-right text-center text-white'></i></li>
    <li>Covid 19 Essentials</li>
    </ul>
    </div>
    </div>
    </div>
    </div>
         <Footer />   
        </>
    )
}

export default Covid19;
