import { Logo } from "./HeaderComponents/Logo";
import { ThemeButton } from "./HeaderComponents/ThemeButton";

export function Header() {
  return (
    <header className="bg-Neutral-800 rounded-[10px] md:rounded-[20px] flex items-center justify-between py-[8px] md:py-[12px] px-[12px] md:px-[16px] ">
      <Logo />
      <ThemeButton />
    </header>
  );
}
