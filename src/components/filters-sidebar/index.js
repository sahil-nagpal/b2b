import React from 'react';
import BoxList from '../box';
import {SimpleList} from '../lists';
const FilterSideBar = ()=>{
	const data =  [
		"https://swapi.dev/api/films/2/",
		"https://swapi.dev/api/films/6/",
		"https://swapi.dev/api/films/3/",
		"https://swapi.dev/api/films/1/",
		"https://swapi.dev/api/films/7/"
	]
	return (
		<>
			<div className = "col-12 ">
				<BoxList className="col-6 mb-4" title={"Filter Results"}>
					<SimpleList  items={data}/>
				</BoxList>
				<BoxList className="col-6 mb-4" title={"Related Category"}>
					<ul>
						<li>1</li>
						<li>1</li>
						<li>1</li>
					</ul>
				</BoxList>
			</div>

		</>

		)
}

export default FilterSideBar