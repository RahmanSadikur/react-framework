import { GET_DETAILS } from "../type";
import React from 'react'
import { UserTypeService } from "../../services/test/userTypeServices";


const Action = () => {
  const userTypeServices=new UserTypeService();
 return function(dispatch){
return userTypeServices.GetAll().then((res)=>{
dispatch({
  type:GET_DETAILS,
  payload:res.data.data,
})
})

  }
  
}

export default Action