import { createContext, useState, useEffect } from "react";
import iconSun from "/assets/images/icon-sun.svg";
import iconMoon from "/assets/images/icon-moon.svg";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  const [themeIcon, setThemeIcon] = useState();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setThemeIcon(iconSun);
    } else {
      document.documentElement.classList.remove("dark");
      setThemeIcon(iconMoon);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeIcon }}>
      <div className="min-h-screen flex flex-col gap-[40px] transition-all duration-300 bg-[linear-gradient(180deg,_#EBF2FC_0%,_#EEF8F9_100%)]  dark:bg-[linear-gradient(180deg,_#040918_0%,_#091540_100%)] pt-[24px] pb-[64px] px-[16px]">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
