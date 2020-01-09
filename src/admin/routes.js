/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import CategoryIcon from '@material-ui/icons/Category';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import TableChartIcon from '@material-ui/icons/TableChart';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TelegramIcon from '@material-ui/icons/Telegram';

// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
import TableList from "./views/TableList/TableList.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/categories",
    name: "Categories",
    rtlName: "ملف تعريفي للمستخدم",
    icon: CategoryIcon,
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/foods",
    name: "Foods",
    rtlName: "ytyugyu",
    icon: FastfoodIcon,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    rtlName: "قائمة الجدول",
    icon: TableChartIcon,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/restaurants",
    name: "Restaurants",
    rtlName: "طباعة",
    icon: RestaurantIcon,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "Orders",
    rtlName: "الرموز",
    icon: AddShoppingCartIcon,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/deliveries",
    name: "Deliveries",
    rtlName: "خرائط",
    icon: TelegramIcon,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/additions",
    name: "Additions",
    rtlName: "خرائط",
    icon: AttachMoneyIcon,
    component: TableList,
    layout: "/admin"
  }
];

export default dashboardRoutes;
