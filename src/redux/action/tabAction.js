import { GET_TABS,ADD_TAB,CLOSE_TAB } from "../tabType"; 
import { routelist } from "../../components/layout/menu/leftMenu";


const GetTabList = () => {

 return function(dispatch){

dispatch({
  type:GET_TABS,
  payload:routelist,
})


  }
  
}


const SaveAction = (req) => {

 return function(dispatch){
dispatch({
  type:ADD_TAB,
  payload:req,
})
  }
  
}
const CloseAction = (req) => {

  return function(dispatch){
 dispatch({
   type:CLOSE_TAB,
   payload:req,
 })
   }
   
 }


export {GetTabList,SaveAction,CloseAction} ;