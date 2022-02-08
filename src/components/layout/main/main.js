import React from 'react';
import LeftMenu from '../menu/leftMenu';
import NavBar from '../nav/navBar';
import { Routes,Route } from 'react-router-dom';
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


const Main = () => {
  return <div>
    <div className='row mb-5 ml-2 mr-2'>
      <div className='col col-lg-12'>
      <NavBar/>
      </div>
    </div>
     
      <div className='row ml-2 mr-2'>
      <div className='col col-lg-2'>
      <LeftMenu/>
      </div>
      <div className='col col-lg-10'>
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
      <Route exact path="/hr/credential"  element={<Credential/>} />
      <Route exact path="/hr/payslip"  element={<Payslip/>} />

      </Routes>

      </div>
      </div>

      </div>;
};

export default Main;
