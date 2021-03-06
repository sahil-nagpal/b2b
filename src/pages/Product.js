import React from 'react';
import FilterSideBar from '../components/filters-sidebar';
import TitleHeader from '../components/title';
import CategoryBox from '../components/category-box';
import LocationHeader from '../components/location-header';
import ContentCard from '../components/contentCard';
import { useSelector,useDispatch } from 'react-redux';
const ProductPage = ()=>{
	const {categories} = useSelector(state=>state.site)
	const demoData = [
		{
		  "birth": "31.5 BBY , Kamino",
		  "description": "Boba Fett was a Mandalorian warrior and bounty hunter. He was the only unaltered clone of the famed Jango Fett, created in 32 BBY as unit A0050, one of the first of many Fett replicas designed to become part of the Grand Army of the Republic, and was raised as Jango's son. Jango taught Boba much, training him to become a skilled bounty hunter as was his father-figure before him. In 22 BBY, Jango was killed at the Battle of Geonosis, which opened the Clone Wars.",
		  "gender": "Male",
		  "height": "1.83 meters",
		  "image": "http://img2.wikia.nocookie.net/__cb20130920001614/starwars/images/5/58/BobaFettMain2.jpg",
		  "name": "Boba Fett",
		  "planet": "Kamino",
		  "species": "Human"
		},
		{
		  "birth": "200 BBY, Kashyyyk",
		  "description": "Chewbacca (or \"Chewie\", as he was known by his friends) was a legendary Wookiee from Kashyyyk and co-pilot of Han Solo's ship, the Millennium Falcon. He was the son of Attichitcuk, the husband of Mallatobuck, and the father of Lumpawaroo. Chewbacca carried with him the name of an ancient Wookiee hero, the great Bacca, first of the great chieftains of Kashyyyk, and the creator of a sword that denoted leadership among the Wookiees. This name placed Chewbacca in a noble lineage.",
		  "gender": "Male",
		  "height": "2.28 meters",
		  "image": "http://img4.wikia.nocookie.net/__cb20080815045819/starwars/images/thumb/7/73/Chewbaccaheadshot.jpg/500px-Chewbaccaheadshot.jpg",
		  "name": "Chewbacca",
		  "planet": "Kashyyyk",
		  "species": "Wookiee"
		},
		{
		  "birth": "600 BBY, Nal Hutta",
		  "description": "Jabba Desilijic Tiure, better known as Jabba the Hutt and often called the \"Bloated One,\" though never to his face, was one of the most notorious Hutt crime lords in the galaxy, who governed a large criminal empire located in the Outer Rim Territories from his desert palace on Tatooine. At the height of his power, Jabba was one of the most powerful crime lords in the galaxy, even having contact with Prince Xizor, the head of the Black Sun Syndicate.",
		  "gender": "Hermaphrodite",
		  "height": "3.9 meters long\n1.75 meters tall",
		  "image": "http://img1.wikia.nocookie.net/__cb20080409144511/starwars/images/e/e5/Jabba_Boonta_Eve.jpg",
		  "name": "Demo",
		  "planet": "Nal Hutta",
		  "species": "Hutt"
		},
		{
			"birth": "600 BBY, Nal Hutta",
			"description": "Jabba Desilijic Tiure, better known as Demo and often called the \"Bloated One,\" though never to his face, was one of the most notorious Hutt crime lords in the galaxy, who governed a large criminal empire located in the Outer Rim Territories from his desert palace on Tatooine. At the height of his power, Jabba was one of the most powerful crime lords in the galaxy, even having contact with Prince Xizor, the head of the Black Sun Syndicate.",
			"gender": "Hermaphrodite",
			"height": "3.9 meters long\n1.75 meters tall",
			"image": "http://img1.wikia.nocookie.net/__cb20080409144511/starwars/images/e/e5/Jabba_Boonta_Eve.jpg",
			"name": "Demo",
			"planet": "Nal Hutta",
			"species": "Hutt"
		  },
		  {
			"birth": "600 BBY, Nal Hutta",
			"description": "Jabba Desilijic Tiure, better known as Demo and often called the \"Bloated One,\" though never to his face, was one of the most notorious Hutt crime lords in the galaxy, who governed a large criminal empire located in the Outer Rim Territories from his desert palace on Tatooine. At the height of his power, Jabba was one of the most powerful crime lords in the galaxy, even having contact with Prince Xizor, the head of the Black Sun Syndicate.",
			"gender": "Hermaphrodite",
			"height": "3.9 meters long\n1.75 meters tall",
			"image": "http://img1.wikia.nocookie.net/__cb20080409144511/starwars/images/e/e5/Jabba_Boonta_Eve.jpg",
			"name": "Demo",
			"planet": "Nal Hutta",
			"species": "Hutt"
		  },
		  {
			"birth": "600 BBY, Nal Hutta",
			"description": "Jabba Desilijic Tiure, better known as Demo and often called the \"Bloated One,\" though never to his face, was one of the most notorious Hutt crime lords in the galaxy, who governed a large criminal empire located in the Outer Rim Territories from his desert palace on Tatooine. At the height of his power, Jabba was one of the most powerful crime lords in the galaxy, even having contact with Prince Xizor, the head of the Black Sun Syndicate.",
			"gender": "Hermaphrodite",
			"height": "3.9 meters long\n1.75 meters tall",
			"image": "http://img1.wikia.nocookie.net/__cb20080409144511/starwars/images/e/e5/Jabba_Boonta_Eve.jpg",
			"name": "Demo",
			"planet": "Nal Hutta",
			"species": "Hutt"
		  },
		  {
			"birth": "600 BBY, Nal Hutta",
			"description": "Jabba Desilijic Tiure, better known as Demo and often called the \"Bloated One,\" though never to his face, was one of the most notorious Hutt crime lords in the galaxy, who governed a large criminal empire located in the Outer Rim Territories from his desert palace on Tatooine. At the height of his power, Jabba was one of the most powerful crime lords in the galaxy, even having contact with Prince Xizor, the head of the Black Sun Syndicate.",
			"gender": "Hermaphrodite",
			"height": "3.9 meters long\n1.75 meters tall",
			"image": "http://img1.wikia.nocookie.net/__cb20080409144511/starwars/images/e/e5/Jabba_Boonta_Eve.jpg",
			"name": "Demo",
			"planet": "Nal Hutta",
			"species": "Hutt"
		  },
		 
	  ]
	return (
		<>
			<LocationHeader />
			<div className="col-12 d-flex mb-4 px-2">


				<div className="col-2 m-178 ml-3"><FilterSideBar/></div>
				<div className="col-8 mb-2 pd-2  lay-left">
					<TitleHeader title={"Categories to explore"} />
					<CategoryBox data={demoData} />
					<ContentCard/>
					
				</div>
				<div className="col-2 mb-2 pd-2 "></div>
			</div>
		</>

		)
}

export default ProductPage