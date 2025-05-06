import { Logo } from "./HeaderComponents/Logo";
import { ThemeButton } from "./HeaderComponents/ThemeButton";

export function Header() {
  return (
    <header className="bg-Neutral-800 rounded-[10px] flex items-center justify-between py-[8px] px-[12px] ">
      <Logo />
      <ThemeButton />
    </header>
  );
}
