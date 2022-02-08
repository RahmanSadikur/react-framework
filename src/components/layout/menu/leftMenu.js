import React from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useNavigate } from "react-router-dom";
const LeftMenu = () => {
  let navigate = useNavigate(); 
  return <div >
      <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/"
            onSelect={({itemId}) => {
              // maybe push to the route
              if(!itemId.includes("*")){
                navigate(itemId);
              }
              

            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/',
                // you can use your own custom Icon component as well
                // icon is optional
               // elemBefore: () => <Icon name="inbox" />,
              },
              {
                title: 'HR',
                itemId: '/hr*',
                //elemBefore: () => <Icon name="users" />,
                subNav: [
                  {
                    title: 'User Type',
                    itemId: '/hr/usertype',
                  },
                  {
                    title: 'User',
                    itemId: '/hr/user',
                  },
                  {
                    title: 'Payslip',
                    itemId: '/hr/payslip',
                  },
                ],
              },
              {
                title: 'Inventory',
                itemId: '/inventory*',
                subNav: [
                  {
                    title: 'Store',
                    itemId: '/inventory/store',
                  },
                  {
                    title: 'Branch',
                    itemId: '/inventory/branch',
                  },
                  {
                    title: 'Site',
                    itemId: '/inventory/site',
                  },
                  {
                    title: 'Category',
                    itemId: '/inventory/category',
                  },
                  {
                    title: 'Sub Category',
                    itemId: '/inventory/subcategory',
                  },
                  {
                    title: 'Item',
                    itemId: '/inventory/item',
                  },
                  {
                    title: 'Item Details',
                    itemId: '/inventory/itemdetails',
                  },
                ],
              },
              
            ]}
          />


  </div>;
};

export default LeftMenu;
