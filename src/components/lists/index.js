import React from 'react'

export const SimpleList = (props)=>{
	return (
		<>
			<ul className="simple-ul">
				{props.items.map((item,idx)=>{
					return <li key ={idx}><a className="category-link-style link-style-none">{item}</a></li>
				})}
			</ul>
		</>
		)
}


export const CheckBoxList = (props)=>{
	return (
		<>
			<ul className="checkBox-ul">
				{props.items.map((item,idx)=>{
					return (
						<React.Fragment key ={idx+"_check"}>
							<li className="form-check check-li"  >
								<input className="form-check-input"  type="checkbox" /> 
								<a className="form-check-label  link-style-none filter-link-style">{item}</a>
							</li>
						</React.Fragment>
						)
				})}
			</ul>
		</>
		)
}