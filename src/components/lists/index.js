import React from 'react'

export const SimpleList = (props)=>{
	return (
		<>
			<ul className="simple-ul">
				{props.items.map((item,idx)=>{
					return <li key ={idx}>{item}</li>
				})}
			</ul>
		</>
		)
}