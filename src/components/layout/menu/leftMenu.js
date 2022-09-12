import Dashboard from "../../../components/dashboard/dashboard";
import Store from "../../inventory/store/store";
import Branch from "../../inventory/branch/branch";
import Category from "../../inventory/category/category";
import SubCategory from "../../inventory/subCategory/subCategory";
import Site from "../../inventory/site/site";
import Item from "../../inventory/item/item";
import ItemDetails from "../../inventory/itemDetails/itemDetails";
import UserType from "../../hr/userType/userType";
import User from "../../hr/user/user";
import Credential from "../../hr/credential/credential";
import Payslip from "../../hr/payslip/payslip";
import Test from "../../test/test";

export const childMenulist = [
  {
    id: 1,
    parentMenuIndex: 3,
    component: Store,
    name: "store",
    title: "Store",
    link: "/inventory/store",
    icon: "pi pi-chart-bar",
    isSelect: false,
    hasChild: false,
  },
  {
    id: 2,
    parentMenuIndex: 3,
    component: Branch,
    name: "branch",
    title: "Branch",
    link: "/inventory/branch",
    icon: "pi pi-chart-bar",
    isSelect: false,
    hasChild: false,
  },
  {
    id: 3,
    parentMenuIndex: 3,
    component: Site,
    name: "site",
    title: "Site",
    link: "/inventory/site",
    icon: "pi pi-chart-bar",
    isSelect: false,
    hasChild: false,
  },
  {
    id: 4,
    parentMenuIndex: 3,
    component: Category,
    name: "category",
    title: "Category",
    icon: "pi pi-chart-bar",
    link: "/inventory/category",
    isSelect: false,
    hasChild: false,
  },
  {
    id: 5,
    parentMenuIndex: 3,
    component: SubCategory,
    name: "subCategory",
    title: "Sub Category",
    icon: "pi pi-chart-bar",
    link: "/inventory/subcategory",
    isSelect: false,
    hasChild: false,
  },
  {
    id: 6,
    parentMenuIndex: 3,
    component: Item,
    name: "item",
    title: "Product",
    icon: "pi pi-chart-bar",
    link: "/inventory/item",
    isSelect: false,
    hasChild: false,
  },
  {
    id: 7,
    parentMenuIndex: 3,
    component: ItemDetails,
    name: "itemdetails",
    title: "Product Details",
    icon: "pi pi-chart-bar",
    link: "/inventory/itemdetails",
    isSelect: false,
    hasChild: false,
  },
  {
    id: 8,
    parentMenuIndex: 2,
    component: UserType,
    name: "userType",
    title: "User Type",
    icon: "pi pi-chart-bar",
    link: "/hr/usertype",
    isSelect: false,
    hasChild: false,
  },
  {
    id: 9,
    parentMenuIndex: 2,
    component: User,
    name: "user",
    title: "User",
    icon: "pi pi-chart-bar",
    link: "/hr/user",
    isSelect: false,
    hasChild: false,
  },
  {
    id: 10,
    parentMenuIndex: 2,
    component: Payslip,
    name: "payslip",
    title: "Payslip",
    icon: "pi pi-chart-bar",
    link: "/hr/payslip",
    isSelect: false,
    hasChild: false,
  },
  {
    id: 11,
    parentMenuIndex: 6,
    component: Test,
    name: "Test",
    title: "Test",
    icon: "pi pi-chart-bar",
    link: "/test",
    isSelect: false,
    hasChild: false,
  },
];
export const mainMenulist = [
  {
    id: 1,
    name: "DashBorad",
    title: "Dash-Borad",
    icon: "pi pi-chart-bar",
    isSelect: false,
    hasChild: true,
  },
  {
    id: 2,
    name: "HR",
    title: "HR",
    icon: "pi pi-users",
    isSelect: false,
    hasChild: true,
  },
  {
    id: 3,
    name: "Inventory",
    title: "Inventory",
    icon: "pi pi-building",
    isSelect: false,
    hasChild: true,
  },
  {
    id: 4,
    name: "Order",
    title: "Order",
    icon: "pi pi-list",
    isSelect: false,
    hasChild: true,
  },
  {
    id: 5,
    name: "Chalan",
    title: "Chalan",
    icon: "pi pi-pencil",
    isSelect: false,
    hasChild: true,
  },
  {
    id: 6,
    name: "Administration",
    title: "Administration",
    icon: "pi pi-user-edit",
    isSelect: false,
    hasChild: true,
  },
];

export var routelist = [
  { id: 1, component: Dashboard, title: "Dash-Borad" },
  { id: 2, component: Test, title: "Test" },
];
