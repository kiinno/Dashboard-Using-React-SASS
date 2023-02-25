import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import "./home.scss";
import PeopleIcon from "@mui/icons-material/People";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReportIcon from "@mui/icons-material/Report";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget
            title={"users"}
            counter={24134}
            percentage={55}
            icon={<PeopleIcon />}
          />
          <Widget
            title={"orders"}
            counter={443}
            percentage={32}
            icon={<BorderColorIcon />}
          />
          <Widget
            title={"reports"}
            counter={44}
            percentage={12}
            icon={<ReportIcon />}
          />
          <Widget
            title={"delivering"}
            counter={7654}
            percentage={65}
            icon={<LocalShippingIcon />}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
