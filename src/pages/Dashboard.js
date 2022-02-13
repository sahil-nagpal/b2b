import React from "react";
import Header from "../layouts/Header";
const Dashboard = ()=>{
    return (
        <>
        <Header />
            <div className=" row mt-64">
                <div className="col-2 d-flex align-items-center flex-column p-0 sampleBorder ">
                    <div className="d-flex flex-column text-center align-items-center imageSidebar" >
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"  className="round"></img>
                        <p className="m-0 fontArial"><strong>Business Bazar</strong></p>
                        <p className="m-0 fontArial newFont">User Id : 134203</p>
                        <p className="m-0 fontArial newFont">Netwings Infotech</p>
                        <p className="m-0 fontArial newFont">UttarPradesh,India</p>
                        <p className="m-0 fontArial newFont">Last Verfied : 13 days ago</p>
                    </div>
                    <div className="w-100 mt-4">
                        <ul className="link-list">
                            <li className="p-2 px-4 ">Dashboard</li>
                            <li className="p-2 px-4 ">Trade Khata</li>
                            <li className="p-2 px-4 ">Shopping Manager</li>
                            <li className="p-2 px-4 ">Profile</li>
                            <li className="p-2 px-4 ">Inquires & Contacts</li>
                            <li className="p-2 px-4 ">Buy Leads</li>
                            <li className="p-2 px-4 ">Feautred products</li>

                        </ul>
                    </div>
                    
                </div>
                <div className="col-10 m-0 p-0 sampleBorder ">
                    <div className="boxShadowGenerator" > <p className="px-4 p-3"><h5>Dashboard</h5></p></div>
                    <div>
                        <div className="col-10 ">
                           <div className="m-2 mt-4 p-4 boxShadowGenerator">
                                <h5>  Add GST No to start your business </h5>
                                <button className="btn btn-danger">Subscribe</button>
                           </div>
                           <div className="m-2 mt-4 p-3 boxShadowGenerator">
                               <div className="d-flex justify-content-between">
                                   <h6>Contact Details</h6>
                                   <label>Edit</label>
                               </div>
                               <div className="d-flex justify-content-around">
                                    <BoxStructure backColor={"#65CEA6"} title={"Personal Details"} name={"Business Bazar"} infoField={"Mobile Number : 9815998116"} addField={"Email : example@gmail.com"} /> 
                                    <BoxStructure backColor={"#6BAFBC"} title={"Business Detail"} name={"Netwings Infotech"} infoField={"Pan No : 12312313423"} addField={"GST No : example@gmail.com"} />
                               </div>
                           </div>
                           
                        </div>
                        <div className="col-2"></div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

const BoxStructure = (props)=>{
    return (
        <div style={{"backgroundColor":props.backColor}} className="boxStructure m-1 p-2 pt-4 col-6 ">
            <h6>{props.title}</h6>
            <hr></hr>
            
            <div>
                <p> {props.name}</p>
            </div>
            <div className="d-flex justify-content-between">
                <p> {props.infoField}</p>
            </div>
            <div className="d-flex justify-content-between">
                <p> {props.addField}</p>
            </div>
            <div className="d-flex justify-content-between">

            </div>
        </div>

    )
}


export default Dashboard;