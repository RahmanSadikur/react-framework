import { GET_DETAILS,SAVE } from "../type";
import React from 'react'
import { UserTypeService } from "../../services/test/userTypeServices";


const GetAllAction = () => {
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

const SaveAction = (req) => {
  const userTypeServices=new UserTypeService();
 return function(dispatch){
return userTypeServices.Save(req).then((res)=>{
dispatch({
  type:SAVE,
  payload:res.data.data,
})
})

  }
  
}

export {GetAllAction,SaveAction} ;