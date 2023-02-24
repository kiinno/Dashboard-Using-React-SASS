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
            <DashboardIcon className="icon" />
            <span>Dashbaord</span>
          </li>
          <p className="title">lists</p>
          <li>
            <PersonIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <LocalGroceryStoreIcon className="icon" />
            <span>products</span>
          </li>
          <li>
            <AccessTimeFilledIcon className="icon" />
            <span>orders</span>
          </li>

          <li>
            <LocalShippingIcon className="icon" />
            <span>deliveries</span>
          </li>

          <p className="title">useful</p>
          <li>
            <BarChartIcon className="icon" />
            <span>state</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>notifications</span>
          </li>
          <p className="title">service</p>
          <li>
            <MonitorHeartIcon className="icon" />
            <span>system health</span>
          </li>
          <li>
            <PsychologyAltIcon className="icon" />
            <span>logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>settings</span>
          </li>
          <p className="title">user</p>
          <li>
            <AccountBoxIcon className="icon" />
            <span>profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>logout</span>
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
