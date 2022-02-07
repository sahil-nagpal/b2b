import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClipboardCheck, faCrown, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
function ContentCard() {
  return <div className='d-flex mt-2 sampleBorder'>
        <div className='d-flex w-50'>
            <img src='https://images.pexels.com/photos/9693624/pexels-photo-9693624.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='ima' id='image'/>
            {/* <a href='/'>Watch Video</a> */}
            <div className=''>
            <h4 className='m-2' id='h3'>Indsutrial Reverse Osmosis Units</h4>
                <div className='d-flex m-2 justify-content-around'>
                <h5 className=''>rs 1.1 lakh</h5>
                <a href='/' className='links'>Get Latest Price</a>
                </div>
            <ul className='' id='unorder'>
                <li className='text-secondary'>Voltage: <span className='text-dark'>220v-380 V</span></li>
                <li className='text-secondary'>Voltage: <span className='text-dark'>220v-380 V</span></li>
                <li className='text-secondary'>Voltage: <span className='text-dark'>220v-380 V</span></li>
                <li className='text-secondary'>Voltage: <span className='text-dark'>220v-380 V</span></li>
                <li className='text-secondary'>Voltage: <span className='text-dark'>220v-380 V</span></li>
            </ul>
            </div>
        </div>
        <div className='bg-gry'>
            <h4 className='text-secondary'>Indian Ion Exchange & Chemicals Limited</h4>
            
            <p className='text-muted' id='p2'>GIDC. Naroda,Ahmedabad </p>
            <div className='d-flex'>
                <ul className='' id='unorder'>
                    <li id='listWithFont' className='text-secondary'><FontAwesomeIcon icon={faCrown} color={'green'}/>Industry Leader</li>
                    <li id='listWithFont' className='text-secondary'><FontAwesomeIcon icon={faYoutube} color={'red'}/>Company Video</li>
                </ul>
                <ul className='' id='unorder'>
                    <li id='listWithFont' className='text-secondary'><FontAwesomeIcon icon={faCheckCircle} color={'yellow'}/>TrustSEAL Verified</li>
                    <li id='listWithFont' className='text-secondary'><FontAwesomeIcon icon={faClipboardCheck} color={'#780e5c'}/>Verified Exporter</li>
                </ul>
            </div>
            <br/>
            <div className='linking'>
            <a href='/' id='links1'><FontAwesomeIcon icon={faPhoneAlt}/>View Mobile Number</a>
        <br/>
        <p className='m-4'></p>
            <a href='/' id='links2'><b>Contact Supplier </b>Request a quote</a>
            </div>
        </div>
  </div>;
}


export default ContentCard;
