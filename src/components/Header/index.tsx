import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import "./styles.scss";

export function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    localStorage.setItem("theme", isCurrentDark ? "light" : "dark");
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === "light"}
            />
            <button
              type="button"
              className={`toggle-btn__input-label`}
              onClick={handleThemeChange}
            >
              Switch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
