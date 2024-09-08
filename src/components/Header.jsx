import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";

function Header() {
  function changeFont(font) {
    document.body.style.fontFamily = font
      ? `${font}, "Lora", serif`
      : `"Lora", serif`;
  }

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".search-container input").classList.toggle("dark");
    document
      .querySelector(".select-container select ")
      .classList.toggle("dark-mode");
    document.querySelector(".source-url").classList.toggle("dark-a");
    document.querySelector(".moon").classList.toggle("dark-moon");
  };

  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div>
        <div className="select-container">
          <select
            name="fontFamily"
            id="fontSelect"
            onChange={(e) => changeFont(e.target.value)}
          >
            <option value="serif">Serif</option>
            <option value="sans-serif">Sans-serif</option>
            <option value="monospace">Monospace</option>
            <option value="cursive">Cursive</option>
            <option value="fantasy">Fantasy</option>
          </select>
        </div>
        <div className="header-right">
          <label className="toggle-switch">
            <input type="checkbox" onClick={toggleDarkMode} />
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
