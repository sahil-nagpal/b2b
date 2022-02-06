import React from "react";
import Card from '../card'
const CategoryBox = (props)=>{
    console.log("props ::::",props.data)
    return (
        <>
            <div className="cat-bx d-flex justify-content-between align-items-start">
                {props.data.map((item,idx)=>{
                    return <Card key={idx} imgTitle={item.name} imgUrl={item.image}  />
                })}
                
            </div>
        
        </>
    )
}

export default CategoryBox;