import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div>
        <div className="select-container">
          <select name="" id="">
            <option value="">Serif</option>
            <option value="">English</option>
            <option value="">French</option>
            <option value="">Arabic</option>
          </select>
        </div>
        <div className="header-right">
          <label className="toggle-switch">
            <input type="checkbox" />
            <div className="toggle-switch-background">
              <div className="toggle-switch-handle"></div>
            </div>
          </label>
          <img src={moon} className="moon" alt="moon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
