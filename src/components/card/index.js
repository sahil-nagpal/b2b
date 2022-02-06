import React from "react";
const Card = (props)=>{
    console.log("props ::::::::",props)
    return (
        <>
            <div className="card max-width cat_img" style={{"width":"18rem"}}>
                <img className="card-img-top" src={props.imgUrl} alt="Card image cap" />
                <div className="card-body cat_name m-2 p-2">
                    <span className="card-title text-center">{props.imgTitle}</span>
                </div>
            </div>
        </>
    )
}

export default Card;