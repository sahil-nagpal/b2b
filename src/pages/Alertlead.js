import React, { useState} from 'react'
import {Link } from "react-router-dom";
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

const Alertlead = () => {
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [keywords, setKeywords] = useState("");
    async function subscribeAlert(e)
    {
        e.preventDefault()
        const formData = new FormData();
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('keywords', keywords);
    }
    return (
        <>
            <Header />
            <div className='breadcrumbs'>
    <div className='container-fluid'>
    <div className='row align-items-center'>
    <div className='col-lg-6 col-md-6 col-12'>
    <div className='breadcrumbs-content'>
    <h1 className='page-title'>Subscribe Lead Alerts</h1>
    </div>
    </div>
    <div className='col-lg-6 col-md-6 col-12'>
    <ul className='breadcrumb-nav'>
    <li><Link className='nav-link' to="/">Home</Link></li>
    <li><i className='fal fa-angle-right text-center text-white'></i></li>
    <li>Subscribe Lead Alerts</li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    <div className='container-fluid mt-3 mb-3'>
        <div className='row'>
        <div className='col-sm-8 offset-sm-3'>
            <div className='card'>
            <div className='row mb-3 mt-3 ps-4 pe-4'>
    <label className='col-sm-4 col-form-label'>Email</label>
    <div className='col-sm-8'>
    <input name='email' type="text" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Id" />
    </div>
  </div>
  <div className='row mb-3 mt-3 ps-4 pe-4'>
    <label className='col-sm-4 col-form-label'>Mobile</label>
    <div className='col-sm-8'>
    <input name='mobile' type="text" className='form-control' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile" />
    </div>
  </div>
  <div className='row mb-3 mt-3 ps-4 pe-4'>
    <label className='col-sm-4 col-form-label'>Keywords</label>
    <div className='col-sm-8'>
    <textarea name='keywords' type="text" className='form-control' value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="Enter Keywords" ></textarea>
    </div>
  </div>
  <div className='row mb-3 mt-3 ps-4 pe-4'>
    <div className='col-sm-2 offset-sm-10'>
      <button type="submit" onClick={subscribeAlert} className='btn btn-primary'>Submit</button>
    </div>
  </div>
            </div>
        </div>
        </div>
    </div>
    <Footer />
        </>
    )
}

export default Alertlead;

