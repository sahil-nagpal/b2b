import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    "cities":[],
    "categories":[]
    
}

export const siteSlice = createSlice({
    name:'site',
    initialState,
    reducers:{
        feedCities:(state,action)=>{
            let temp = action.payload
            state.cities =temp.cities
        },
        feedCategories : (state,action)=>{
            let temp = action.payload
            state.categories = temp.categories
        }
    }
})

export const { feedCities } = siteSlice.actions


export const fetchCities = ()=>{
    return async(dispatch)=>{
        let response = await axios.get("https://www.ecindia.netwingsinfotech.in/api/city")
        if(response.status === 200){
            dispatch(siteSlice.actions.feedCities({"cities":response.data.city}))
        }
        else{
            console.log("error")
        }
    }
}
export const fetchCategories = ()=>{
    return async(dispatch)=>{
        let response = await axios.get('https://www.ecindia.netwingsinfotech.in/api/category')
        if(response.status === 200){
            dispatch(siteSlice.actions.feedCategories({"categories":response.data.category}))
        }
        else{
            console.log("error")
        }
    }
}

export default siteSlice.reducer