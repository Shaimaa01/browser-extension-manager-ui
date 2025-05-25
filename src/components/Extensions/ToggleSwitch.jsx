export function ToggleSwitch({ isActive, onToggle, label }) {
  return (
    <button
      onClick={onToggle}
      className={`w-[36px] h-[20px] rounded-full p-[2px]  relative ${
        isActive ? "bg-Red-400" : "bg-Neutral-600"
      }`}
      aria-label={label}
      aria-pressed={isActive}
    >
      <span
        className={` absolute w-[16px] h-[16px] rounded-full bg-Neutral-0 top-1/2 -translate-y-1/2   shadow-[0px_1px_2px_-1px_#09154099,0px_1px_3px_0px_#0A0D121A] transition-transform duration-300 ease-in-out cursor-pointer  ${
          isActive ? "translate-x-0" : "-translate-x-[16px]"
        } `}
      />
    </button>
  );
}
