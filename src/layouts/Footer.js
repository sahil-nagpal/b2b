import React from 'react'
import {Link } from "react-router-dom";
import '../App.css'
const Footer = () => {
    return (
        <>
          <footer>
          <div className="container-fluid">
          <div className="row">
          <div className="col-sm-3 mt-2">
        <h5>About Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Advertise With Us</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Weekly Newsletter</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Trade Rewards</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Digital Brochure</Link></li>
        <h5>Our Services</h5>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Advertise With Us</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Weekly Newsletter</Link></li>
        </ul>
      </div>
      <div className="col-sm-3 mt-2">
        <h5>Buyers</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Browser Supplies</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted" data-bs-toggle="modal" data-bs-target="#exampleModal">Post Your Requirement</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Subscribe Enquiry Alert</Link></li>
		  <h5>Sellers</h5>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Display New Products</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Subscribe Enquiry Alert</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Buy Verified Leads</Link></li>
        </ul>
      </div>
<div className="col-sm-3 mt-2">
        <h5>Directory</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Manufacturers</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Business Services</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Service Providers</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Industry Hubs</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Country Suppliers</Link></li>
		  <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Featured Products</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Buyer</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Site Map</Link></li>
        </ul>
      </div>
<div className="col-sm-3 mt-2">
        <h5>Event</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Trade Shows</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Confrences</Link></li>
          <li className="nav-item mb-2"><Link to=''className="nav-link p-0 text-muted">Events By country</Link></li>
          </ul>
        <h5>Social Media</h5>
        <ul className="nav d-flex">
          <li className="nav-item mb-2"><a href="#" className="nav-link ps-2 text-muted"><i className='fab fa-facebook-f'></i></a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link ps-2 text-muted"><i className='fab fa-twitter'></i></a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link ps-2 text-muted"><i className='fab fa-instagram'></i></a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link ps-2 text-muted"><i className='fab fa-linkedin-in'></i></a></li>
          </ul>		  
		  </div>
    <div className="d-flex justify-content-between">
      <p> Copyright &copy; {new Date().getFullYear()} Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
      </ul>
    </div>
          </div>
          </div>
              </footer>  
        </>
    );
};

export default Footer;
