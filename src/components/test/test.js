import React,{useState} from 'react';
import { Routes,Route } from 'react-router-dom';
import AddTest from './addTest';
import ShowTest from './showTest';
const Test = () => {
    let [isaddnew,setIsaddnew]=useState(false);
  
    if(isaddnew){
        return <AddTest changeIsAddnew={setIsaddnew}/>;
    }else{
     return <ShowTest changeIsAddnew={setIsaddnew}/>;
    }
//   return <div>
//       {}
//       {/* <Routes>
//       <Route exact path="/test/show"  element={<ShowTest/>} />
//       <Route exact path="/test/add"  element={<AddTest/>} />
//       </Routes> */}
//   </div>;
};

export default Test;
