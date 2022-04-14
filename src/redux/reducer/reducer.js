import { GET_DETAILS } from "../type";
const initState={
    data:[],
}


const Reducer = (state=initState,action) => {
  switch(action.type){
      case GET_DETAILS:
         return{data: action.payload} ;
         
          default:
              return state;
  }
}

export default Reducer