import React, { useState,  useRef } from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import NavBar from '../nav/navBar';
import { Routes,Route } from 'react-router-dom';
import { Button } from 'primereact/button';
import Dashboard from '../../../components/dashboard/dashboard';
import Store from '../../inventory/store/store';
import Branch from '../../inventory/branch/branch';
import Category from '../../inventory/category/category';
import SubCategory from '../../inventory/subCategory/subCategory';
import Site from '../../inventory/site/site';
import Item from '../../inventory/item/item';
import ItemDetails from '../../inventory/itemDetails/itemDetails';
import UserType from '../../hr/userType/userType';
import User from '../../hr/user/user';
import Credential from '../../hr/credential/credential';
import Payslip from '../../hr/payslip/payslip';
import Test from '../../test/test';
import { Link } from 'react-router-dom';
import SearchBarResult from '../../utility/searchBarResult'
import "./main.css"
import { mainMenulist,childMenulist } from '../menu/leftMenu';


const Main = () => {

  const [expand, setexpand] = useState(true)
  const [menuIndex, setmenuIndex] = useState(0)
  
  
  return <div className='mainContainer'> 
    <div className='flex flex-wrap flex-row mb-5 ml-2 mr-2'>
      <div className='flex'>
      <NavBar/>
      </div>
    </div>


    <div className="flex flex-row flex-wrap ">
     
        <div className="flex align-items-start justify-content-center cl1 min-h-screen  mt-5">
          
        <div className="flex flex-column card-container ">

        { mainMenulist.map(element => {
        return (
          <div key={element.id} className="flex align-items-center justify-content-center w-3rem h-3rem  font-bold text-white  m-1"><Button className="buttonClass " tooltip={`${element.title}`} icon={`${element.icon}`} onClick={(e) =>{
            if(expand===false){
              setexpand(true);
              mainMenulist.forEach(e => {
                if(e.id===element.id){
                  e.isSelect=true;
                }else{
                  e.isSelect=false;
                }
                
              });
             
            }else{
             if(element.isSelect){
               setexpand(false);
               mainMenulist.forEach(e => {
              
                  e.isSelect=false;
                
              });
             }
             else{
              setexpand(true);
              mainMenulist.forEach(e => {
                if(e.id===element.id){
                  e.isSelect=true;
                }else{
                  e.isSelect=false;
                }
                
              });
             }
   
            }
            setmenuIndex(element.id);
           
           }
              } /></div>
        )
      })}
      
    </div>
        </div>
        <div className="flex   cl2 min-h-screen mt-3 " >
          {expand===false? <Splitter style={{height: "calc(100vh)",width:"calc(100vw - 85px)"}} >
                
                <SplitterPanel size={100} className="flex align-items-start justify-content-center pt-3">
                
                     <Routes>
                   <Route exact path="/"  element={<Dashboard/>} />
                   <Route exact path="/inventory/store"  element={<Store/>} />
                   <Route exact path="/inventory/branch"  element={<Branch/>} />
                   <Route exact path="/inventory/category"  element={<Category/>} />
                   <Route exact path="/inventory/subcategory"  element={<SubCategory/>} />
                   <Route exact path="/inventory/site"  element={<Site/>} />
                   <Route exact path="/inventory/item"  element={<Item/>} />
                   <Route exact path="/inventory/itemdetails"  element={<ItemDetails/>} />
                   <Route exact path="/hr/usertype"  element={<UserType/>} />
                   <Route exact path="/hr/user"  element={<User/>} />
                   <Route exact path="/hr/profile"  element={<Credential/>} />
                   <Route exact path="/hr/payslip"  element={<Payslip/>} />
                  <Route exact path="/test"  element={<Test/>} />
                  <Route exact path="/searchbarresult"  element={<SearchBarResult/>} />
             
                   </Routes>


                </SplitterPanel>
            </Splitter> :
              <Splitter style={{height: "calc(100vh)",width:"calc(100vw - 85px)"}} >
         
              <SplitterPanel  size={15} minSize={5} className=" splitter pt-4">
              <ul className='ul'> { 
                         childMenulist.map(element => {     
                                if(element.parentMenuIndex===menuIndex){
                                  
                                    return(
                                    <li key={element.id}>
                                     
                                        <Link to={element.link} className="menuclass"> <div className='formenudiv pl-3'>{element.title}</div></Link>
                                       
                                        
                                       
                                        </li>
                                        )
                                  }
                            })
               } </ul>
                      </SplitterPanel>
  
               <SplitterPanel size={85} minSize={80} className="flex align-items-start justify-content-center pt-3">
                          
                          <Routes>
                          <Route exact path="/"  element={<Dashboard/>} />
                          <Route exact path="/inventory/store"  element={<Store/>} />
                          <Route exact path="/inventory/branch"  element={<Branch/>} />
                          <Route exact path="/inventory/category"  element={<Category/>} />
                          <Route exact path="/inventory/subcategory"  element={<SubCategory/>} />
                          <Route exact path="/inventory/site"  element={<Site/>} />
                          <Route exact path="/inventory/item"  element={<Item/>} />
                          <Route exact path="/inventory/itemdetails"  element={<ItemDetails/>} />
                          <Route exact path="/hr/usertype"  element={<UserType/>} />
                          <Route exact path="/hr/user"  element={<User/>} />
                          <Route exact path="/hr/profile"  element={<Credential/>} />
                          <Route exact path="/hr/payslip"  element={<Payslip/>} />
                          <Route exact path="/test"  element={<Test/>} />
                          <Route exact path="/searchbarresult"  element={<SearchBarResult/>} />
  
                          </Routes>
  
  
                      </SplitterPanel>
                  </Splitter>}

        

      
      
      </div>
      

    </div>


      </div>;
      
};

export default Main;
