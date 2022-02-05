import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const Register = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [user_type, setUserType] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [order_value, setOrder_value] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [specification, setSpecification] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");

  async function signUp(e) {
    e.preventDefault()

    console.warn(name, image);

    const formData = new FormData();

    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('name', name);
    formData.append('company', company);
    formData.append('password', password);
    formData.append('user_type', user_type);
    formData.append('product', product);
    formData.append('quantity', quantity);
    formData.append('unit', unit);
    formData.append('order_value', order_value);
    formData.append('description', description);
    formData.append('specification', specification);
    formData.append('price', price);
    formData.append('status', status);
    formData.append('image', image);

    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: 'POST',
      body: formData
    });
    result = await result.json()
    console.warn("result", result)
    localStorage.setItem("user-info", JSON.stringify(result))
  }
  return (
    <>
      <Header />
      <div className='breadcrumbs'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6 col-12'>
              <div className='breadcrumbs-content'>
                <h1 className='page-title'>Registration</h1>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <ul className='breadcrumb-nav'>
                <li><Link className='nav-link' to="/">Home</Link></li>
                <li><i className='fal fa-angle-right text-center text-white'></i></li>
                <li>Registration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid mt-3 mb-3'>
        <div className='row'>
          <div className='col-sm-7 offset-sm-3'>
            <div className='card'>
              <form>
                <div className='row mb-3 mt-3 ps-4 pe-4'>
                  <div className='input-group'>
                    <span className='input-group-text'><i className='fal fa-envelope'></i></span>
                    <input name='email' type="text" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Id" />
                  </div>
                </div>
                <div className='row mb-3 mt-3 ps-4 pe-4'>
                  <div className='input-group'>
                    <span className='input-group-text'><i className='fal fa-phone-alt'>&nbsp;</i></span>
                    <input name='mobile' type="text" className='form-control' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile" />
                  </div>
                </div>
                <div className='row mb-3 mt-3 ps-4 pe-4'>
                  <div className='input-group'>
                    <span className='input-group-text'><i className='fal fa-user'></i></span>
                    <input name='name' type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
                  </div>
                </div>
                <div className='row mb-3 mt-3 ps-4 pe-4'>
                  <div className='input-group'>
                    <span className='input-group-text'><i className='fal fa-industry-alt'></i></span>
                    <input name='company' type="text" className='form-control' value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Company Name" />
                  </div>
                </div>
                <div className='row mb-3 mt-3 ps-4 pe-4'>
                  <div className='input-group'>
                    <span className='input-group-text'><i className='fal fa-lock'></i></span>
                    <input name='password' type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                  </div>
                </div>
                <div className='row mb-3 mt-3 ps-5'>
                  <div className='form-check d-flex'>
                    <div className='col-sm-3'>
                      <input name='user_type' className='form-check-input' type="radio" value="buyer" onChange={(e) => setUserType(e.target.value)} data-bs-toggle="modal" data-bs-target="#buyerModal" />
                      <label className='form-check-label'>&nbsp;Buyer&nbsp;
                      </label>
                    </div>
                    <div className='col-sm-3'>
                      <input name='user_type' className='form-check-input' type="radio" value="seller" onChange={(e) => setUserType(e.target.value)} data-bs-toggle="modal" data-bs-target="#sellerModal" />
                      <label className='form-check-label'>&nbsp;Seller&nbsp;
                      </label>
                    </div>
                  </div>
                </div>
                <div className='d-flex mb-3'>
                  <div class="col-sm-5 offset-sm-1">
                    <button onClick={signUp} type="submit" className='btn btn-primary'>Register</button>
                  </div>
                  <div class="col-sm-5 mb-3 offset-sm-2">If already Registered &nbsp;&nbsp;
                    <Link className='userpage' to='/login'>Login</Link>
                  </div>
                </div>


                <div className='modal fade' id="buyerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-header'>
                        <h5 className='modal-title' id="exampleModalLabel">Buyer</h5>
                        <button type="button" className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className='modal-body'>
                        <div className='row mb-3'>
                          <label className='col-sm-4 col-form-label'>Product Name</label>
                          <div className='col-sm-8'>
                            <input name='product' type="text" className='form-control' value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Enter Product Name" />
                          </div>
                        </div>
                        <div className='row mb-3'>
                          <label className='col-sm-4 col-form-label'>Quantity&nbsp;</label>
                          <div className='col-sm-8 d-flex'>
                            <input name='quantity' type="text" className='form-control' value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Enter Quantity" />
                            <div className='input-group-text bg-transparent'>
                              <select name='unit' className='citylist bg-transparent' value={unit} onChange={(e) => setUnit(e.target.value)} >
                                <option>Select Unit</option>
                                <option value="Kilogram">Kilogram</option>
                                <option value="Nos">Nos</option>
                                <option value="Pieces">Pieces</option>
                                <option value="Tons">Tons</option>
                                <option value="Units">Units</option>
                                <option value="20's container">20's container</option>
                                <option value="40's container">40's container</option>
                                <option value="Bags">Bags</option>
                                <option value="Bag">Bag</option>
                                <option value="Barrel">Barrel</option>
                                <option value="Bareels">Bareels</option>
                                <option value="Bottels">Bottels</option>
                                <option value="Boxes">Boxes</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className='row mb-3'>
                          <label className='col-sm-4 col-form-label'>Order Value</label>
                          <div className='col-sm-8 d-flex'>
                            <div className='input-group-text bg-transparent'>
                              <select name='order_value' className='citylist bg-transparent' value={order_value} onChange={(e) => setOrder_value(e.target.value)}>
                                <option>Select your order</option>
                                <option value="5000 to 10000">5000 to 10000</option>
                                <option value="">10001 to 20000</option>
                                <option value="10001 to 20000">20001 to 50000</option>
                                <option value="Upto 1 Lakh">Upto 1 Lakh</option>
                                <option value="Upto 5 Lakhs">Upto 5 Lakhs</option>
                                <option value="Upto 10 Lakhs">Upto 10 Lakhs</option>
                                <option value="Upto 20 Lakhs">Upto 20 Lakhs</option>
                                <option value="Upto 1 Crore">Upto 1 Crore</option>
                                <option value="More than 1 Crore">More than 1 Crore</option>
                              </select>
                            </div>
                            <div className='input-group-text bg-transparent'>
                              <i className='fal fa-rupee-sign'></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='modal-footer'>
                        <button type="button" className='btn btn-secondary' data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='modal fade' id="sellerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-header'>
                        <h5 className='modal-title' id="exampleModalLabel">Seller</h5>
                        <button type="button" className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className='modal-body'>
                        <div class="row mb-3">
                          <label for="inputEmail3" className='col-sm-3 col-form-label'>Your Services</label>
                          <div class="col-sm-9">
                            <select name='service' class="form-select" id="autoSizingSelect" value={service} onChange={(e) => setService(e.target.value)}>
                              <option selected>Service / Goods</option>
                              <option value="Service">Service</option>
                              <option value="Two">Two</option>
                            </select>
                          </div>
                        </div>
                        <div class="row mb-3">
                            <label className='col-sm-5 col-form-label'>Product Description</label>
                            <div className='col-sm-4'>
                              <textarea name='description' className='fom-control' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>
                          </div>
                        <div class="row mb-3">
                            <label className='col-sm-5 col-form-label'>Product Specification</label>
                          <div className='col-sm-4'>
                            <textarea name='specification' className='fom-control' value={specification} onChange={(e) => setSpecification(e.target.value)}></textarea>
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label className='col-sm-2 col-form-label'>Price</label>
                        <div className='col-sm-6'>
                          <input name='price' type='text' className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                      </div>

                      <div className='col-sm-4'>
                        <div class="form-check">
                          <input name='status' class="form-check-input" type="checkbox" id="status" value={status} onChange={(e) => setStatus(e.target.value)} />

                          <label class="form-check-label" for="status">
                            Publish your price
                          </label>
                        </div>
                      </div>
                      <div class="row mb-3">
                          <label for="image" className='form-label col-sm-4'>Product Images</label>
                          <div className='col-sm-8'>
                          <input name='image' class="form-control" type="file" id="formFile" onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Register;