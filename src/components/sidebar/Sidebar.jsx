import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">dashboard</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">main</p>
          <li>
            <NavLink to={"/"}>
              <DashboardIcon className="icon" />
              <span>Dashbaord</span>
            </NavLink>
          </li>
          <p className="title">lists</p>
          <li>
            <NavLink to={"/users"}>
              <PersonIcon className="icon" />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>
              <LocalGroceryStoreIcon className="icon" />
              <span>products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/orders"}>
              <AccessTimeFilledIcon className="icon" />
              <span>orders</span>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/deliveries"}>
              <LocalShippingIcon className="icon" />
              <span>deliveries</span>
            </NavLink>
          </li>

          <p className="title">useful</p>
          <li>
            <NavLink to={"/state"}>
              <BarChartIcon className="icon" />
              <span>state</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/notifications"}>
              <NotificationsNoneIcon className="icon" />
              <span>notifications</span>
            </NavLink>
          </li>
          <p className="title">service</p>
          <li>
            <NavLink to={"/system"}>
              <MonitorHeartIcon className="icon" />
              <span>system health</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/logs"}>
              <PsychologyAltIcon className="icon" />
              <span>logs</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/settings"}>
              <SettingsIcon className="icon" />
              <span>settings</span>
            </NavLink>
          </li>
          <p className="title">user</p>
          <li>
            <NavLink to={"/profile"}>
              <AccountBoxIcon className="icon" />
              <span>profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/logout"}>
              <LogoutIcon className="icon" />
              <span>logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
