import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDotCircle, faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import './style.css';
   

function LocationHeader() {
  return <div className='d-flex flex-row border col-12 container-fluid' style={{fontSize: '15px',fontFamily:'arial'}}>
      <div className='border-right ml-1 col-4'>
      <ul id='unorderList' className='d-flex justify-content-around flex-row text-secondary'>
          <li><FontAwesomeIcon icon={faMapMarkerAlt} className='text-danger'/><b style={{marginLeft: '5px'}}> Location </b></li>
          <li><FontAwesomeIcon icon={faSearch} style={{position:'absolute',top:'18px',color:'#808080',marginLeft:'10px'}}/><input placeholder='Enter City' id='input1'/></li>
          <li><FontAwesomeIcon icon={faDotCircle} className='text-info '/><span style={{marginLeft: '5px'}}>Near Me</span></li>
      </ul>
      </div>
      
      <div>
          <ul className='d-flex flex-row m-2 p-1 col-8 w-100 justify-content-around' id='unorderList'>
              <li><a href='/' className='text-secondary m-2' id='link'>All India</a></li>
              <li><a href='/' className='text-secondary m-2' id='link'>Ludhiana</a></li>
              <li><a href='/' className='text-secondary m-2' id='link'>Chennai</a></li>
              <li><a href='/' className='text-secondary m-2' id='link'>Ahmedabad</a></li>
              <li><a href='/' className='text-secondary m-2' id='link'>Pune</a></li>
              <li><a href='/' className='text-secondary m-2' id='link'>Delhi</a></li>
              <li><a href='/' className='text-secondary m-2' id='link'>Bangaluru</a></li>
              <li><a href='/' className='text-secondary m-2' id='link'>Hyderabad</a></li>
              <li><a href='/' className='text-secondary m-2' id='link'>Mumbai</a></li>
              <li><a href='/' className='text-secondary m-2' id='link'>Kolkata</a></li>
              <li><a href='/' className='text-secondary m-2' id='link'>Nagpur</a></li>
              <li><a href='/' className='text-secondary m-2' id='link'>Jaipur</a></li>
          </ul>
      </div>
  </div>
}

export default LocationHeader;