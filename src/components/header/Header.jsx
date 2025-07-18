import { Logo } from "./HeaderComponents/Logo";
import { ThemeButton } from "./HeaderComponents/ThemeButton";

export function Header() {
  return (
    <header className="bg-Neutral-0 border border-Neutral-200 dark:border-Neutral-800 shadow-[0_2px_3px_0_hsla(213,55%,90%,1)] dark:shadow-none dark:bg-Neutral-800 rounded-[10px] md:rounded-[20px] flex items-center justify-between py-[8px] md:py-[12px] px-[12px] md:px-[16px] ">
      <Logo />
      <ThemeButton />
    </header>
  );
}
