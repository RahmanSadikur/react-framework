import {GET_DETAILS ,SAVE,DELETE } from "../type";
const initState={
    data:[]
}


const Reducer = (state=initState,action) => {
  const findIndexById = (id,objects) => {
    let index = -1;
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
}
  switch(action.type){
      case GET_DETAILS:
        {return{data: action.payload} ;} 
      case SAVE:{
       
        if(findIndexById(action.payload.id,state.data)!==-1){
          state.data.splice(findIndexById(action.payload.id,state.data),1);
         
        }
        state.data.unshift(action.payload);
       
        return {data:[...state.data]} ;
      }
      case DELETE:{
        console.log(action.payload.id);
        if(findIndexById(action.payload.id,state.data)!==-1){
          state.data.splice(findIndexById(action.payload.id,state.data),1);
         
        }
        return {data:[...state.data]} ;
      }
         
         
          default:
              return state;
  }
}

export default Reducer