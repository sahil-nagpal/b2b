import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import '../App.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
const Header = () => {
  const {cities} = useSelector(state => state.site)
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState([]);
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Trade India</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className='header-search'>
      <div className='input-group'>
        <div className='input-group-text bg-transparent'>
        <select className='citylist bg-transparent'>
          <option>All India</option>
          {cities.map((item,idx)=>{
            <option key={idx}> {item.name} </option>
          })}
        </select>
      </div>
      <input type="text" className='form-control ps-4' placeholder="Search for products"/>
      <div className='input-group-append'>
                            <span className='input-group-text bg-transparent text-primary'>
                                <i className='fal fa-search py-1'></i>
                            </span>
                        </div>
    </div>
        </div>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className='nav-item'>
        <Link className='nav-link' to='/post-your-requirements'>Post Buy Requirement</Link>
        </li>
        <li className='nav-item'>
        <Link className='nav-link' to='/product'>Product</Link>
        </li>
      <li className="nav-item dropdown">
        <Link className='nav-link'to='/covid-19-essentials'>Covid-19 Essentials</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            For Buyers
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to='/post-your-requirements'>Post Buy Requirement</Link></li>
            <li><Link className='dropdown-item' to='/subscribe-trade-alerts'>Subscribe Trade Alert</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Suppliers
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to='/subscribe-lead-alert'>Subscribe Lead Alert</Link></li>
            <li><Link className="dropdown-item" to='/search-lead'>Search Lead</Link></li>
          </ul>
        </li>
        <li className="nav-item d-flex loginbutton">
          <Link className="nav-link" to="/login">Login</Link> <span className='mt-1 text-muted'>|</span> <Link className="nav-link" to="/register">Join Free</Link> 
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header;
