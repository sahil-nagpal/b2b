import { configureStore } from '@reduxjs/toolkit'
import  siteSlice  from './siteSlice';
import  userSlice  from './userSlice'
export const store = configureStore({
    reducer:{
        site:siteSlice,user:userSlice}
})

export const userActions = userSlice.actions
export const siteActions = siteSlice.actions