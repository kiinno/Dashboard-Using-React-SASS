import "./widget.scss";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PeopleIcon from "@mui/icons-material/People";
const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">users</span>
        <span className="counter">3748</span>
        <span className="link">see all users</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessIcon />
          20%
        </div>
        <PeopleIcon />
      </div>
    </div>
  );
};

export default Widget;
