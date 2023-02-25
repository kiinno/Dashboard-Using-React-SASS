import "./widget.scss";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
const Widget = ({ type }) => {
  let data = {};
  const amount = Math.floor(Math.random() * 2 ** 12);
  const percentage = Math.floor(Math.random() * 101);
  if (type) {
    switch (type) {
      case "order":
        data = {
          title: "orders",
          isMoney: false,
          link: "view all orders",
          icon: (
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{
                color: "goldenrod",
                backgroundColor: "rgba(218,165,32,0.2)",
              }}
            />
          ),
        };
        break;
      case "earning":
        data = {
          title: "earnings",
          isMoney: true,
          link: "view net earnings",
          icon: (
            <MonetizationOnOutlinedIcon
              className="icon"
              style={{ color: "green", backgroundColor: "rgba(0,255,0,0.2)" }}
            />
          ),
        };
        break;
      case "user":
        data = {
          title: "users",
          isMoney: false,
          link: "see all users",
          icon: (
            <PersonOutlineIcon
              style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
              className="icon"
            />
          ),
        };
        break;
      case "balance":
        data = {
          title: "balance",
          isMoney: false,
          link: "see details",
          icon: (
            <AccountBalanceOutlinedIcon
              className="icon"
              style={{
                color: "purple",
                backgroundColor: "rgba(128,0,128,0.2)",
              }}
            />
          ),
        };
        break;
      default:
        break;
    }
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className={`percentage`}>
          <ExpandLessIcon />
          {percentage}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
