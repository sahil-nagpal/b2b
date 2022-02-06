import React from 'react';

const BoxList = (props)=>{
	return (
		<>
		<div className="box">
			<div className="title-box">
				<span className="label-name">{props.title}</span>
			</div>
			<div>
				<ul>
					<li>1</li>
					<li>3</li>
					<li>4</li>
				</ul>
			</div>

		</div>
		</>
		)
} 

export default BoxList