import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Slider from './Slider';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import FilterSideBar from '../components/filters-sidebar';
import 'react-multi-carousel/lib/styles.css';
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [city, setCity] = useState([]);
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  const cityurl = 'https://www.ecindia.netwingsinfotech.in/api/city'
  const categoryurl = 'https://www.ecindia.netwingsinfotech.in/api/category'
  useEffect(() => {
    axios.get(categoryurl).then(res => {
      if (res.data.status === 200) {
        // console.log(res.data.category);
        let categories = [...res.data.category]
        categories.push({
          "id": 2,
          "name": "Home Supplies",
          "status": 1,
          "created_at": "2022-01-28T04:13:45.000000Z",
          "updated_at": "2022-01-28T04:14:27.000000Z"
      })
      let data =   [{
                  "id": 3,
                  "name": "Home Supplies",
                  "status": 1,
                  "created_at": "2022-01-28T04:13:45.000000Z",
                  "updated_at": "2022-01-28T04:14:27.000000Z"
              },
              {
                  "id": 4,
                  "name": "Home Supplies",
                  "status": 1,
                  "created_at": "2022-01-28T04:13:45.000000Z",
                  "updated_at": "2022-01-28T04:14:27.000000Z"
              },
              {
                  "id": 5,
                  "name": "Home Supplies",
                  "status": 1,
                  "created_at": "2022-01-28T04:13:45.000000Z",
                  "updated_at": "2022-01-28T04:14:27.000000Z"
              },
              {
                  "id": 6,
                  "name": "Home Supplies",
                  "status": 1,
                  "created_at": "2022-01-28T04:13:45.000000Z",
                  "updated_at": "2022-01-28T04:14:27.000000Z"
              },
              {
                  "id": 7,
                  "name": "Home Supplies",
                  "status": 1,
                  "created_at": "2022-01-28T04:13:45.000000Z",
                  "updated_at": "2022-01-28T04:14:27.000000Z"
              }]
        categories = data.concat(categories)
        setCategory(categories);
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
        <div key={idx} className='col-sm-3 '>
          <div className='card col-lg-8 border-none'>
            <img src='assets/img/ct1.jpg ' className="round mx-auto" height={150} />
            <div className='card-body mx-auto'>
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
      <FilterSideBar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12 my-4'>
            <h2>Category</h2>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <Carousel responsive={responsive}>
            {category.map((item,idx) => {
                return (
                  <div key={idx} className='col-sm-8 mx-auto'>
                    <div className='card col-lg-8 '>
                      <img src='assets/img/ct1.jpg ' className="mx-auto" height={150} />
                      <div className='card-body mx-auto'>
                        <Link className="nav-link text-muted" to='scientific-laboratory-services'>{item.name}</Link>
                      </div>
                    </div>
                  </div>
                  
                )
              })}
          </Carousel>;
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