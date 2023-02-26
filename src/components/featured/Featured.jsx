import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">top revenue</h1>
        <MoreVertIcon fontSize="small" className="icon" />
      </div>
      <div className="bottom">
        <div className="chart-progress">
          <CircularProgressbar
            value={0.66}
            maxValue={1}
            text={`${0.66 * 100}%`}
            strokeWidth={5}
          />
        </div>
        <p className="title">total sales</p>
        <p className="amount">$7485</p>
        <p className="description">
          Lorem ex minim consectetur duis velit duis dolor ad adipisicing mollit
          reprehenderit sunt.
        </p>
        <div className="summary">
          <div className="item">
            <div className="item-title">Target</div>
            <div className="item-resualt positive">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resualt-amount">$13.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">this weak</div>
            <div className="item-resualt negative">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resualt-amount">$13.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title ">last month</div>
            <div className="item-resualt negative">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resualt-amount">$13.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
