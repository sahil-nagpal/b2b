import React from "react";
import Card from '../card'
const CategoryBox = (props)=>{
    console.log("props ::::",props.data)
    return (
        <>
            <div className="cat-bx d-flex justify-content-between">
                {props.data.map((item,idx)=>{
                    return <Card imgTitle={item.name} imgUrl={item.image}  />
                })}
                
            </div>
        
        </>
    )
}

export default CategoryBox;