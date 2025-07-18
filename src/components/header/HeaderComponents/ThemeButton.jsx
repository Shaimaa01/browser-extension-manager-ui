import { useContext } from "react";
import ThemeContext from "/src/context/ThemeContext"

export function ThemeButton() {
  const { theme, setTheme, themeIcon } = useContext(ThemeContext);

  return (
    <button
      className={`h-[50px] w-[50px] focus:shadow-[0_0_0_2px_#FBFDFE,0_0_0_4px_#F25C54]  focus:dark:shadow-[0_0_0_2px_#091540,0_0_0_4px_#F25C54] flex justify-center items-center rounded-[12px] cursor-pointer transition-all duration-300 ${
        theme === "dark" ? " bg-Neutral-700 hover:bg-Neutral-600 " : "bg-Neutral-100 hover:bg-Neutral-300 "
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

