import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    "cities":[],
    
}

export const siteSlice = createSlice({
    name:'site',
    initialState,
    reducers:{
        feedCities:(state,action)=>{
            let temp = action.payload
            state.cities =temp.cities
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

export default siteSlice.reducer