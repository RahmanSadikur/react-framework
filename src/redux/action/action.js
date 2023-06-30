import { GET_DETAILS,SAVE,DELETE } from "../type";
import { UserTypeService } from "../../services/test/userTypeServices";


const GetAllAction = () => {
  const userTypeServices=new UserTypeService();
 return function(dispatch){
return userTypeServices.GetAll().then((res)=>{
  console.log(res)
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
const DeleteAction = (req) => {
  const userTypeServices=new UserTypeService();
 return function(dispatch){
return userTypeServices.Delete(req).then((res)=>{

dispatch({
  type:DELETE,
  payload:res.data.data,
})
})

  }
  
}


export {GetAllAction,SaveAction,DeleteAction} ;