
//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link } from 'react-router-dom';
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu 
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";


const Sidebar = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
              <Link to="/dashboard" className='navbar-brand ml-5'>Dashboard</Link>
              </MenuItem>
              <MenuItem icon={<FaList />}><Link to="/test" className='navbar-brand ml-5'>Test</Link></MenuItem>
              {/* <MenuItem icon={<FaList />}>Category</MenuItem> */}
              <SubMenu title="HR" icon={<FaRegHeart />}>
                <MenuItem><Link to="/hr/usertype" className='navbar-brand ml-5'>User Type</Link></MenuItem>
                <MenuItem><Link to="/hr/user" className='navbar-brand ml-5'>User</Link></MenuItem>
                <MenuItem><Link to="/hr/payslip" className='navbar-brand ml-5'>Payslip</Link></MenuItem>
             </SubMenu>
             <SubMenu title="Inventory" icon={<RiPencilLine />}>
             <MenuItem><Link to="/inventory/store" className='navbar-brand ml-5'>Store</Link></MenuItem>
                <MenuItem><Link to="/inventory/brach" className='navbar-brand ml-5'>Branch</Link></MenuItem>
                <MenuItem><Link to="/inventory/site" className='navbar-brand ml-5'>Site</Link></MenuItem>
                <MenuItem><Link to="/inventory/category" className='navbar-brand ml-5'>Category</Link></MenuItem>
                <MenuItem><Link to="/inventory/subcategory" className='navbar-brand ml-5'>Sub Category</Link></MenuItem>
                <MenuItem><Link to="/inventory/item" className='navbar-brand ml-5'>Item</Link></MenuItem>
                <MenuItem><Link to="/inventory/itemdetails" className='navbar-brand ml-5'>Item Details</Link></MenuItem>
             </SubMenu>
             {/* <SubMenu title="Test" icon={<BiCog />}>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
             </SubMenu> */}
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};
export default Sidebar;