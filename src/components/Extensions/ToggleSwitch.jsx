export function ToggleSwitch({ isActive, onToggle, label }) {
  return (
    <button
      onClick={onToggle}
      className={`w-[36px] h-[20px] rounded-full p-[2px] focus:shadow-[0_0_0_2px_#FBFDFE,0_0_0_4px_#F25C54]  focus:dark:shadow-[0_0_0_2px_#091540,0_0_0_4px_#F25C54] relative ${
        isActive ? "bg-Red-700 dark:bg-Red-400 hover:bg-Red-500" : "bg-Neutral-300 dark:bg-Neutral-600"
      }`}
      aria-label={label}
      aria-pressed={isActive}
    >
      <span
        className={` absolute w-[16px] h-[16px] rounded-full bg-Neutral-0  top-1/2 -translate-y-1/2 shadow-[0_1px_3px_0_hsla(220,29%,5%,0.3),0_1px_2px_-1px_hsla(220,29%,5%,0.3)]  dark:drop-shadow-[0_1px_3px_0_hsla(220,29%,5%,0.1),0_1px_2px_-1px_hsla(227,75%,14%,0.6)] transition-transform duration-300 ease-in-out cursor-pointer  ${
          isActive ? "translate-x-0" : "-translate-x-[16px]"
        } `}
      />
    </button>
  );
}
