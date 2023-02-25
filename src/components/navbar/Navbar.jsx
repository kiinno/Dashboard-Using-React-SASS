import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrraper">
        <div className="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            autoComplete="off"
          />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" /> <span>english</span>
          </div>
          <div className="item">
            <Brightness4Icon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">99</div>
          </div>

          <div className="item">
            <ChatBubbleIcon className="icon" />
            <div className="counter">99</div>
          </div>

          <div className="item">
            <MenuIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://ychef.files.bbci.co.uk/976x549/p0dnxrcv.jpg"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
