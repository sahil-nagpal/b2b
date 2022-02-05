import axios from 'axios'

export const register = async (formData)=>{
	console.log("formData :::::: ",formData)
	let response = await fetch("https://www.ecindia.netwingsinfotech.in/api/register", {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    let result = {"success":false,"message":''}
    if (response.status === 200){
    	result['success'] = true
    	result['data'] = await result.json()
    	result['message'] = "Succeed Successfully"
    	 window.localStorage.setItem("user-info", JSON.stringify(result['data']))
    }
    else{
    	result['success'] = false
    	result['data'] = {}
    	result['message'] = "Some Server Error Please Try Again Later"
    }
    
   
    return result
   
}