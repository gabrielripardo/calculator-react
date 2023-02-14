import { useState } from "react";
import Calculator from "./components/Calculator";
import Layout from "./components/Layout";
import { ThemeContext } from "./contexts/theme-context";
import "./App.scss";

function App() {
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem("theme");
    const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <Layout>
          <div className="content-wrapper">
            <Calculator></Calculator>
          </div>
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
