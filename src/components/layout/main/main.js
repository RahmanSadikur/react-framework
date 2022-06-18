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


const Main = () => {
 
  const [isDashClick, setisDashClick] = useState(false)
  const [isHrClick, setisHrClick] = useState(false)
  const [isInventoryClick, setisInventoryClick] = useState(false)
  const [isOrderClick, setisOrderClick] = useState(false)
  const [isChalanClick, setisChalanClick] = useState(false)
  const [isAccessClick, setisAccessClick] = useState(false)
  const [Collapse, setCollapse] = useState(true)
  const [menuIndex, setmenuIndex] = useState(0)
  const menulist = [
    { id: 1, menuIndex: 3,name:"store", title: 'Store',link:"/inventory/store",isSelect:false,hasChild:false },
    { id: 2,menuIndex: 3,name:"branch", title: 'Branch',link:"/inventory/branch",isSelect:false,hasChild:false },
    { id: 3,menuIndex: 3,name:"site", title: 'Site',link:"/inventory/site",isSelect:false,hasChild:false },
    { id: 4, menuIndex: 3,name:"category", title: 'Category',link:"/inventory/category",isSelect:false,hasChild:false },
    { id: 5,menuIndex: 3,name:"subCategory", title: 'Sub Category',link:"/inventory/subcategory",isSelect:false,hasChild:false },
    { id: 6,menuIndex: 3,name:"item", title: 'Product',link:"/inventory/item",isSelect:false,hasChild:false },
    { id: 7,menuIndex: 3,name:"itemdetails", title: 'Product Details',link:"/inventory/itemdetails",isSelect:false,hasChild:false },
    { id: 8, menuIndex: 2,name:"userType", title: 'User Type',link:"/hr/usertype",isSelect:false,hasChild:false },
    { id: 9, menuIndex: 2,name:"user", title: 'User',link:"/hr/user",isSelect:false,hasChild:false },
    { id: 10, menuIndex: 2,name:"payslip", title: 'Payslip',link:"/hr/payslip",isSelect:false,hasChild:false },

];


  
  
  
  return <div className=''> 
    <div className='flex flex-wrap flex-row mb-5 ml-2 mr-2'>
      <div className='flex'>
      <NavBar/>
      </div>
    </div>


    <div className="flex flex-row flex-wrap card-container blue-container">
        <div className="flex align-items-start justify-content-center cl1 min-h-screen  font-bold text-white mt-5">
          
        <div className="flex flex-column card-container green-container ">
        <div className="flex align-items-center justify-content-center w-3rem h-3rem  font-bold text-white  m-1"><Button className="buttonClass " tooltip='Dash-Borad' icon="pi pi-chart-bar" onClick={(e) =>{
         if(Collapse===false){
          setCollapse(true);
          setisDashClick(true);
          setisAccessClick(false);
          setisInventoryClick(false);
          setisChalanClick(false);
          setisHrClick(false);
          setisOrderClick(false);
         }else{
          if(isDashClick){
            setCollapse(false);
            setisDashClick(false);
            setisAccessClick(false);
            setisInventoryClick(false);
            setisChalanClick(false);
            setisHrClick(false);
            setisOrderClick(false);
          }
          else{
            setCollapse(true);
            setisDashClick(true);
            setisAccessClick(false);
            setisInventoryClick(false);
            setisChalanClick(false);
            setisHrClick(false);
            setisOrderClick(false);
          }

         }
         setmenuIndex(1);
        
        }
           } /></div>
        <div className="flex align-items-center justify-content-center w-3rem h-3rem  font-bold text-white  m-1"><Button className="buttonClass " tooltip='HR'  icon="pi pi-building" onClick={(e) => { 
           if(Collapse===false){
            setCollapse(true);
            setisDashClick(false);
            setisAccessClick(false);
            setisInventoryClick(false);
            setisChalanClick(false);
            setisHrClick(true);
            setisOrderClick(false);
           }else{
            if(isHrClick){
              setCollapse(false);
              setisDashClick(false);
              setisAccessClick(false);
              setisInventoryClick(false);
              setisChalanClick(false);
              setisHrClick(false);
              setisOrderClick(false);
            }
            else{
              setCollapse(true);
              setisDashClick(false);
              setisAccessClick(false);
              setisInventoryClick(false);
              setisChalanClick(false);
              setisHrClick(true);
              setisOrderClick(false);
            }
  
           }
           setmenuIndex(2);
        }} /></div>
        <div className="flex align-items-center justify-content-center w-3rem h-3rem  font-bold text-white  m-1"><Button className="buttonClass "  tooltip='Inventory'  icon="pi pi-list" onClick={(e) =>{ if(Collapse===false){
          setCollapse(true);
          setisDashClick(false);
          setisAccessClick(false);
          setisInventoryClick(true);
          setisChalanClick(false);
          setisHrClick(false);
          setisOrderClick(false);
         }else{
          if(isInventoryClick){
            setCollapse(false);
            setisDashClick(false);
            setisAccessClick(false);
            setisInventoryClick(false);
            setisChalanClick(false);
            setisHrClick(false);
            setisOrderClick(false);
          }
          else{
            setCollapse(true);
            setisDashClick(false);
            setisAccessClick(false);
            setisInventoryClick(true);
            setisChalanClick(false);
            setisHrClick(false);
            setisOrderClick(false);
          }

         }
         setmenuIndex(3);
         } } /></div>
        <div className="flex align-items-center justify-content-center w-3rem h-3rem  font-bold text-white  m-1"><Button className="buttonClass " tooltip='Order'  icon="pi pi-pencil" onClick={(e) =>{ if(Collapse===false){
          setCollapse(true);
          setisDashClick(false);
          setisAccessClick(false);
          setisInventoryClick(false);
          setisChalanClick(false);
          setisHrClick(false);
          setisOrderClick(true);
         }else{
          if(isOrderClick){
            setCollapse(false);
            setisDashClick(false);
            setisAccessClick(false);
            setisInventoryClick(false);
            setisChalanClick(false);
            setisHrClick(false);
            setisOrderClick(false);
          }
          else{
            setCollapse(true);
            setisDashClick(false);
            setisAccessClick(false);
            setisInventoryClick(false);
            setisChalanClick(false);
            setisHrClick(false);
            setisOrderClick(true);
          }

         }
         setmenuIndex(4)
         } } /></div>
        <div className="flex align-items-center justify-content-center w-3rem h-3rem  font-bold text-white  m-1"><Button className="buttonClass " tooltip='Chalan'  icon="pi pi-star" onClick={(e) =>{ if(Collapse===false){
          setCollapse(true);
          setisDashClick(false);
          setisAccessClick(false);
          setisInventoryClick(false);
          setisChalanClick(true);
          setisHrClick(false);
          setisOrderClick(false);
         }else{
          if(isChalanClick){
            setCollapse(false);
            setisDashClick(false);
            setisAccessClick(false);
            setisInventoryClick(false);
            setisChalanClick(false);
            setisHrClick(false);
            setisOrderClick(false);
          }
          else{
            setCollapse(true);
            setisDashClick(false);
            setisAccessClick(false);
            setisInventoryClick(false);
            setisChalanClick(true);
            setisHrClick(false);
            setisOrderClick(false);
          }

         }
         setmenuIndex(5)
         }} /></div>
        <div className="flex align-items-center justify-content-center w-3rem h-3rem  font-bold text-white  m-1"><Button className="buttonClass " tooltip='Access-Control'  icon="pi pi-check-circle" onClick={(e) =>{ if(Collapse===false){
          setCollapse(true);
          setisDashClick(false);
          setisAccessClick(true);
          setisInventoryClick(false);
          setisChalanClick(false);
          setisHrClick(false);
          setisOrderClick(false);
         }else{
          if(isAccessClick){
            setCollapse(false);
            setisDashClick(false);
            setisAccessClick(false);
            setisInventoryClick(false);
            setisChalanClick(false);
            setisHrClick(false);
            setisOrderClick(false);
          }
          else{
            setCollapse(true);
            setisDashClick(false);
            setisAccessClick(true);
            setisInventoryClick(false);
            setisChalanClick(false);
            setisHrClick(false);
            setisOrderClick(false);
          }

         }
         setmenuIndex(6)
         }} /></div>

    </div>
        </div>
        <div className="flex  justify-content-center cl2 min-h-screen mt-3 " id="abc">
          {Collapse===false? <Splitter style={{height: "calc(100vh)",width:"calc(100vw - 85px)"}} >
                
                <SplitterPanel size={100} className="flex align-items-start justify-content-center ">
                    
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
         
              <SplitterPanel  size={15} minSize={5} className="flex align-items-start  justify-content-start splitter pt-5">
              <ul className='ul'> { 
                         menulist.map(element => {     
                                if(element.menuIndex===menuIndex){
                                  
                                    return(
                                    <li key={element.id}>
                                      <div className=' pl-3'>
                                        <Link to={element.link} className="menuclass">{element.title}</Link>
                                       
                                        </div>
                                       
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

     
      <div className='flex-row-reverse min-h-screen' >
      {/* <div className={`switch ${menuCollapse ? "col-md-1" : "col-md-2"}`}  >
     
      <Sidebar menuCollapse={menuCollapse} setMenuCollapse={setMenuCollapse} />
      </div>
      <div className={`switch ${menuCollapse ? "col-md-11" : "col-md-10"}`}  > */}
     

      {/* </div> */}
      </div>

      </div>;
      
};

export default Main;
