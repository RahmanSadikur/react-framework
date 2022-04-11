import { GET_DETAILS } from "../type";
const initState={
    data:[{id:1,name:"Sadik"},{id:2,name:"rupna"}],
}


const Reducer = (state=initState,action) => {
  switch(action.type){
      case GET_DETAILS:
          return state;
          default:
              return state;
  }
}

export default Reducer