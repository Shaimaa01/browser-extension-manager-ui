import { useContext } from "react";
import ThemeContext from "/src/context/ThemeContext"

export function ThemeButton() {
  const { theme, setTheme, themeIcon } = useContext(ThemeContext);

  return (
    <button
      className={`h-[50px] w-[50px]   flex justify-center items-center rounded-[12px] cursor-pointer transition-all duration-300 ${
        theme === "dark" ? " bg-Neutral-700  " : "bg-Neutral-100  "
      }`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <img
        src={themeIcon}
        alt="theme icon"
        className="max-sm:w-[20px] max-sm:h-[20px]"
      />
    </button>
  );
}

