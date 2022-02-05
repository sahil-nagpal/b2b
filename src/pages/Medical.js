import React from 'react'
import {Link } from "react-router-dom";
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

const Medical = () => {
    return (
        <div>
            <Header />
            <div className='breadcrumbs'>
    <div className='container-fluid'>
    <div className='row align-items-center'>
    <div className='col-lg-6 col-md-6 col-12'>
    <div className='breadcrumbs-content'>
    <h1 className='page-title'>Medical Healthcare Products</h1>
    </div>
    </div>
    <div className='col-lg-6 col-md-6 col-12'>
    <ul className='breadcrumb-nav'>
    <li><Link className='nav-link' to="/">Home</Link></li>
    <li><i className='fal fa-angle-right text-center text-white'></i></li>
    <li>Medical Healthcare Products</li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    <div className='container-fluid'>
        <h3 className='mt-3'>Operation Theater Equipment</h3>
        <div className='row mt-3 mb-3'>
            <div className='col-sm-2 mb-3'>
                <div className='card'>
                    <img src='assets/img/o9.jpg'alt='' /> 
                    <div className='card-body'>
                        <p className='text-center'>Suction Device</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/o2.jpg'alt='' /> 
                    <div className='card-body'>
                        <p className='text-center'>Surgical Lights</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/o3.jpg'alt='' /> 
                    <div className='card-body'>
                        <p className='text-center'>Oxygen Concentrator</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/o4.jpg'alt='' /> 
                    <div className='card-body'>
                        <p className='text-center'>Theater Lights</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/o5.jpg'alt='' /> 
                    <div className='card-body'>
                        <p className='text-center'>Instrument Strelizer</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/o6.jpg'alt='' /> 
                    <div className='card-body'>
                        <p className='text-center'>Anesthesia Machine</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2 mb-3'>
                <div className='card'>
                    <img src='assets/img/r1.jpg' alt='' />
                    <div className='card-body'>
                        <p className='text-center'>Silicon Resuscitator</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2 mb-3'>
                <div className='card'>
                    <img src='assets/img/r2.jpg' alt='' height={188} />
                    <div className='card-body'>
                        <p className='text-center'>Artificial Resuscitator</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/r3.jpg' alt='' height={160}/>
                    <div className='card-body'>
                        <p className='text-center'>Neonatal Resuscitator</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/r4.jpg' alt='' height={180} />
                    <div className='card-body'>
                        <p className='text-center'>Adult Resuscitator</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/r5.jpg' alt='' height={180} />
                    <div className='card-body'>
                        <p className='text-center'>Medical Resuscitator</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/r6.jpg' alt='' height={180} />
                    <div className='card-body'>
                        <p className='text-center'>Oxygen Resuscitator</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2 mb-3'>
                <div className='card'>
                    <img src='assets/img/b1.jpg' alt='' />
                    <div className='card-body'>
                        <p className='text-center'>Blood Sugar Monitor</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/b2.jpg' alt='' />
                    <div className='card-body'>
                        <p className='text-center'>Blood Separator</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/b3.jpg' alt='' />
                    <div className='card-body'>
                        <p className='text-center'>Blood Warmer</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/b4.jpg' alt='' />
                    <div className='card-body'>
                        <p className='text-center'>Blood Filtor</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/b5.jpg' alt='' />
                    <div className='card-body'>
                        <p className='text-center'>Blood Cell</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-2'>
                <div className='card'>
                    <img src='assets/img/b6.jpg' alt='' />
                    <div className='card-body'>
                        <p className='text-center'>Blood Roller</p>
                    </div>
                </div>
            </div>
        </div>   
</div>
         <div className='container-fluid'>
             <h3>Leading Suppliers</h3>
             <div className='row'>
            <div className='col-sm-3 mb-3'>
                <div className='card'>
                    <img src='assets/img/o1.jpg' alt='' height={150}/>
                    <div className='card-body'>
                    <h5>Stethscope</h5>
                        <h6>Remi Elektrodechnik Limited</h6>
                        <p>Location: Mumbai, India</p>
                        <p>Mobile: 888888888</p>
                        <p>Full Address: Mumbai, India</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-3'>
                <div className='card'>
                    <img src='assets/img/o3.jpg' alt='' height={150}/>
                    <div className='card-body'>
                    <h5>Oxygen Concentrator</h5>
                        <h6>Golden Nimbus International</h6>
                        <p>Location: Mumbai, India</p>
                        <p>Mobile: 888888888</p>
                        <p>Full Address: Mumbai, India</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-3'>
                <div className='card'>
                    <img src='assets/img/o6.jpg' alt='' height={150}/>
                    <div className='card-body'>
                    <h5>Anesthesia Machine</h5>
                        <h6>Everest Composites Pvt Limited</h6>
                        <p>Location: Vadora, India</p>
                        <p>Mobile: 888888888</p>
                        <p>Full Address: Vadora, India</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-3'>
                <div className='card'>
                    <img src='assets/img/o5.jpg' alt='' height={150}/>
                    <div className='card-body'>
                    <h5>Instrument Strelizer</h5>
                        <h6>Surgi Pharma</h6>
                        <p>Location: Mumbai, India</p>
                        <p>Mobile: 888888888</p>
                        <p>Full Address: Mumbai, India</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
            <Footer />
        </div>
    );
};

export default Medical;
