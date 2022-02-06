import React from 'react';
import BoxList from '../box';
import {SimpleList,CheckBoxList} from '../lists';
const FilterSideBar = ()=>{
	const data =  [
		"Mineral Water Plant",
		"Industrial UV Water Purifier",
		"Purified Water Generation System",
		"Pharmaceutical Water System",
		"Water Purifying Equipment"
	]

	const data2 =  [
		"Mineral ",
		"Industrial ",
		"Purified Water ",
		"Pharmaceutical",
		"Water"
	]
	return (
		<>
			<div className = "col-12">
				<BoxList className="col-6 mb-4" title={"Filter Results"}>
					<CheckBoxList items={data2} />
				</BoxList>
				<BoxList className="col-6 mb-4" title={"Related Category"}>
					<SimpleList  items={data}/>
					
				</BoxList>
			</div>

		</>

		)
}

export default FilterSideBar