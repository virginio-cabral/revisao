import "./Header.css";
import Logo from "../../assets/Dashboard.svg";
import Icon from "../../assets/Icon.svg";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <img src={Logo} alt="logo" className="logo" />
          <img src={Icon} alt="icon" className="logo" />
        </div>
      </div>
    </>
  );
}

export default Header;
