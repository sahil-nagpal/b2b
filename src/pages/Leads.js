import React, { useState} from 'react'
import {Link } from "react-router-dom";
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Leads = () => { 
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [orders, setOrders] = useState("");
  async function leadSubmit(e)
  {
    e.preventDefault()
    const formData = new FormData();
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('product', product);
    formData.append('quantity', quantity);
    formData.append('orders', orders);
    formData.append('description', description);

    let result = await fetch("https://www.ecindia.netwingsinfotech.in/api/leads", {
      method: 'POST',
      body: formData
    });
    result = await result.json()
    toast.success("Lead Generated Succesfully"
    ,{position: "top-right",
    autoClose: 5000,
    hideProgressBar: true})
    setEmail("")
    setMobile("")
    setProduct("")
    setQuantity("")
    setDescription("")
    setOrders("")
    console.warn("result", result)
  }
    return (
        <>
         <Header />
         <ToastContainer />
         <div className='breadcrumbs'>
    <div className='container-fluid'>
    <div className='row align-items-center'>
    <div className='col-lg-6 col-md-6 col-12'>
    <div className='breadcrumbs-content'>
    <h1 className='page-title'>Post Buy Requirements</h1>
    </div>
    </div>
    <div className='col-lg-6 col-md-6 col-12'>
    <ul className='breadcrumb-nav'>
    <li><Link className='nav-link' to="/">Home</Link></li>
    <li><i className='fal fa-angle-right text-center text-white'></i></li>
    <li>Post Buy Requirements</li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    <div className='container-fluid mt-3 mb-3'>
        <div className='row'>
        <div className='col-sm-8 offset-sm-3'>
                <div className='card'>
    <form onSubmit={leadSubmit}>
        <div className='row mb-3 mt-3 ps-4 pe-4'>
            <label className='col-sm-4 col-form-label'>Email</label>
            <div className='col-sm-8'>
            <input name='email' type="text" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Id" required />
            </div>
          </div>
          <div className='row mb-3 mt-3 ps-4 pe-4'>
            <label className='col-sm-4 col-form-label'>Mobile</label>
            <div className='col-sm-8'>
            <input name='mobile' type="text" className='form-control' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile" required/>
            </div>
          </div>
          <div className='row mb-3 mt-3 ps-4 pe-4'>
            <label className='col-sm-4 col-form-label'>Product</label>
            <div className='col-sm-8'>
            <input name='product' type="text" className='form-control' value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Enter Product" required/>
            </div>
          </div>
          <div className='row mb-3 mt-3 ps-4 pe-4'>
            <label className='col-sm-4 col-form-label'>Describe in few words</label>
            <div className='col-sm-8'>
            <textarea name='description' type="text" className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" required></textarea>
            </div>
          </div>
          <div className='row mb-3 mt-3 ps-4 pe-4'>
            <label className='col-sm-4 col-form-label'>Quantity with units</label>
            <div className='col-sm-8'>
            <input name='quantity' type="text" className='form-control' value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Enter Quantity" required/>
            </div>
          </div>
          <div className='row mb-3 mt-3 ps-4 pe-4'>
            <label className='col-sm-4 col-form-label'>Order Value</label>
            <div className='col-sm-8'>
            <input name='orders' type="text" className='form-control' value={orders} onChange={(e) => setOrders(e.target.value)} placeholder="Enter Orders Value" required/>
            </div>
          </div>
          <div className='row mb-3 mt-3 ps-4 pe-4'>
            <div className='col-sm-2 offset-sm-10'>
              <button type="submit"  className='btn btn-primary'>Submit</button>
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

export default Leads;
