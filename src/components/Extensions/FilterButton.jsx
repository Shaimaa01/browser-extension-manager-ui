export function FilterButton({ filter, isActive, onClick }) {
  return (
    <button
      onClick={() => onClick(filter)}
      className={`rounded-full px-[20px] pt-[8px] pb-[10px]  font-medium text-[20px] tracking-[-0.3px] leading-[140%] cursor-pointer ${
        isActive
          ? "bg-Red-400 text-Neutral-900"
          : "bg-Neutral-700 border border-Neutral-600 text-Neutral-0"
      }`}
      role="tab"
      aria-selected={isActive}
      aria-controls="extensions-list"
    >
      {filter}
    </button>
  );
}
