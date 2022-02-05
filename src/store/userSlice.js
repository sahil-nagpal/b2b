import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    "phoneAtOtpSection":'',
    "user":{},
    "otpVerified":false
    
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setNumberForOtp:(state,action)=>{
            try{
                console.log(action)
                let temp = action.payload
                state.phoneAtOtpSection = temp.phoneNumber
            }
            catch(err){
                console.log("error in setNumberForOtp :::")
            }
            
        },
        setOtpVerified:(state,action)=>{
            try{
                let temp = action.payload
                state.otpVerified = temp.verified
            }
            catch(err){
               console.log("error in setOtpVerified :::")
            }
            
        }
    }
})

export const  userActions  = userSlice.actions
export default userSlice.reducer