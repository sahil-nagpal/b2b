import React from 'react';
import '../App.css'
const Slider = () => {
    return (
        <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="assets/img/slider/1.png" className="d-block w-100" height={450} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="assets/img/slider/2.png" className="d-block w-100" height={450} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="assets/img/slider/3.png" className="d-block w-100" height={450} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="assets/img/slider/4.png" className="d-block w-100" height={450} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="assets/img/slider/5.png" className="d-block w-100" height={450} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="assets/img/slider/6.png" className="d-block w-100" height={450} alt="..."/>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>    
        </>
    )
}

export default Slider;
