import "./widget.scss";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Widget = ({ title, counter, percentage, icon }) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter">{counter}</span>
        <span className="link">see all {title}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessIcon />
          {percentage}%
        </div>
        {icon}
      </div>
    </div>
  );
};

export default Widget;
