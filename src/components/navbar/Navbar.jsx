import "./navbar.scss";
import {React , useState} from "react"
import Search from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0?false:true);
    return()=>(window.onscroll=null);
  };
  console.log(isScrolled)
  return (
<div className={isScrolled? "navbar scrolled" : "navbar" }>
      <div className="container">
        <div className="left">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <NotificationsIcon className="icon" />
          <img
            src="https://media.tenor.com/WDrmKa6RQ2QAAAAM/funny-cute.gif"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Setting</span>
              <span>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
