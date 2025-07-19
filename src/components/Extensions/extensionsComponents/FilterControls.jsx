import { FilterButton } from "./FilterButton";

export function FilterControls({ activeFilter, onFilterChange , FILTER_OPTIONS}) {
  return (
    <nav className="flex gap-[12px] h-[46px]" role="tablist" aria-label="Extension filters">
      {Object.entries(FILTER_OPTIONS).map(([key, label]) => (
        <FilterButton
          key={key}
          filter={label}
          isActive={activeFilter === label}
          onClick={onFilterChange}
        />
      ))}
    </nav>
  );
} 