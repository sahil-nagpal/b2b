import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Slider from './Slider';
import axios from 'axios';
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [city, setCity] = useState([]);
  const cityurl = 'https://www.ecindia.netwingsinfotech.in/api/city'
  const categoryurl = 'https://www.ecindia.netwingsinfotech.in/api/category'
  useEffect(() => {
    axios.get(categoryurl).then(res => {
      if (res.data.status === 200) {
        // console.log(res.data.category);
        setCategory(res.data.category);
        setLoading(false);
      }
    });
  },[]);
  useEffect(() => {
    axios.get(cityurl).then(res => {
      if (res.data.status === 200) {
        // console.log(res.data.category);
        setCity(res.data.city);
        setLoading(false);
      }
    });

  },[]);
  if (loading) {
  // return <h4>Loading Category...</h4>
  }
  else {
    var showCategoryList = '';
    showCategoryList = category.map((item,idx) => {
      return (
        <div key={idx} className='col-sm-3 round'>
          <div className='card '>
            <img src='assets/img/ct1.jpg' height={150} />
            <div className='card-body'>
              <Link className="nav-link text-muted" to='scientific-laboratory-services'>{item.name}</Link>
            </div>
          </div>
        </div>
        
      )
    })
    var showCityList = '';
    showCityList = city.map((item,idx)=>{
      return (
        <div key={idx} className='col-sm-2 mb-3'>
            <div className='card'>
              <img src={`https://www.ecindia.netwingsinfotech.in/uploads/${item.image}`} alt={item.name}  height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to={item.url}>{item.name}</Link>
              </div>
            </div>
          </div>
      )
    })
  }
  return (
    <>
      <Header />
      <Slider />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 my-4'>
            <h2>Category</h2>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          {showCategoryList}
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 my-4'>
            <h2>Hopspital &amp; Medical Supplies</h2>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/md1.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='medical-equipment'>Medical Equipment</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/md2.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='oxygen-setup'>Oxygen Setup</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/md3.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='diagostic-equipment'>Diagnostic Equipment</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/md4.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='rehabilition-aids'>Rehabilitation Aids</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 my-4'>
            <h2>Health &amp; Beauty</h2>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/h1.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='personal-care-products'>Personal Care Products</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/h2.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='soap-hand-wash'>Soap &amp; Hand Wash</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/h3.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='common-medicine-drug'>Common Medicine &amp; Drug</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/h4.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='hygiene-products'>Hygiene Products</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 my-4'>
            <h2>Chemicals</h2>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/cm1.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='cleaning-chemicals'>Cleaning Chemicals</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/cm2.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='industrial-chemicals'>Industrial Chemicals</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/cm3.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='lab-chemiclas-supplies'>Lab Chemiclas &amp; Supplies</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/cm4.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='chemicals-supplies'>Chemical Supplies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 my-4'>
            <h2>Pharmaceuticals</h2>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/p5.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='anti-infective-drugs'>Anti Infective Drugs &amp; Medicines</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/p7.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='ayurvedic-medicines-products'>Ayurvedic Medicines &amp; Products</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/p3.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='dietary-supplements'>Dietary Supplements</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card'>
              <img src='assets/img/p6.jpg' height={150} />
              <div className='card-body'>
                <Link className="nav-link text-muted" to='pediatric-medicines'>Pediatric Medicines</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 my-4'>
            <h2>Suppliers by Cities</h2>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          {showCityList}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;