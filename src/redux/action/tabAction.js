import { GET_TABS,ADD_TAB,CLOSE_TAB } from "../tabType"; 
import { childMenulist } from "../../components/layout/menu/leftMenu";


const GetTabList = () => {

 return function(dispatch){

dispatch({
  type:GET_TABS,
  payload:childMenulist,
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


export {GetTabList,SaveAction,CLOSE_TAB} ;