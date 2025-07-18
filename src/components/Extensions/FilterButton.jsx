export function FilterButton({ filter, isActive, onClick }) {
  return (
    <button
      onClick={() => onClick(filter)}
      className={`rounded-full  px-[20px] pt-[8px] pb-[10px] focus:shadow-[0_0_0_2px_#FBFDFE,0_0_0_4px_#F25C54] focus:dark:shadow-[0_0_0_2px_#091540,0_0_0_4px_#F25C54] font-medium text-[20px] tracking-[-0.3px] leading-[140%] cursor-pointer ${
        isActive
          ? "bg-Red-700 dark:bg-Red-400 hover:bg-Red-500 text-Neutral-0 dark:text-Neutral-900"
          : "bg-Neutral-0 dark:bg-Neutral-700  hover:dark:bg-Neutral-600 border border-Neutral-200 dark:border-Neutral-600 shadow-[0_1px_2px_0_hsla(217,28%,78%,0.4)] dark:shadow-none text-Neutral-900 dark:text-Neutral-0"
      }`}
      role="tab"
      aria-selected={isActive}
      aria-controls="extensions-list"
    >
      {filter}
    </button>
  );
}
