import React from 'react';

const BoxList = (props)=>{
	return (
		<>
		<div className="box">
			<div className="title-box">
				<span className="label-name">{props.title}</span>
			</div>
			<div className="cell-bx">
				{props.children}
			</div>

		</div>
		</>
		)
} 

export default BoxList