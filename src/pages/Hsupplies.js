import React from 'react'
import {Link } from "react-router-dom";
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

const Hsupplies = () => {
    return (
        <>
            <Header />
            <div className='breadcrumbs'>
    <div className='container-fluid'>
    <div className='row align-items-center'>
    <div className='col-lg-6 col-md-6 col-12'>
    <div className='breadcrumbs-content'>
    <h1 className='page-title'>Home Supplies</h1>
    </div>
    </div>
    <div className='col-lg-6 col-md-6 col-12'>
    <ul className='breadcrumb-nav'>
    <li><Link className='nav-link' to="/">Home</Link></li>
    <li><i className='fal fa-angle-right text-center text-white'></i></li>
    <li>Home Supplies</li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    <div className='container-fluid mt-3'>
        <div className='row'>
            <div className='col-sm-2 mb-3'>
                <div className='card'>
                    <img src='assets/img/k1.jpg'alt='' />
                    <div className='card-body'>
                    <p className='text-center'>Kitchen Chopper</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/k2.jpg'alt='' />
                    <div className='card-body'>
                    <p className='text-center'>Choppimg Board</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/k3.jpg'alt='' />
                    <div className='card-body'>
                    <p className='text-center'>Garlic Press</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/k4.jpg'alt='' />
                    <div className='card-body'>
                    <p className='text-center'>Cheese Slicers</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/k5.jpg'alt='' />
                    <div className='card-body'>
                    <p className='text-center'>Potato Chip Slicers</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/k6.jpg'alt='' />
                    <div className='card-body'>
                    <p className='text-center'>Coffee Canister</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
        </>
    )
}

export default Hsupplies;

