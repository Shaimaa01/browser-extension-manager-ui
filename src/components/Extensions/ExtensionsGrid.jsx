import { EmptyState } from "./EmptyState";
import { ExtensionCard } from "./ExtensionCard";

export function ExtensionsGrid({
  extensions,
  onToggle,
  onRemove,
  activeFilter,
  FILTER_OPTIONS,
}) {
  if (extensions.length === 0) {
    return (
      <EmptyState activeFilter={activeFilter} FILTER_OPTIONS={FILTER_OPTIONS} />
    );
  }

  return (
    <>
      {extensions.map((extension, index) => (
        <ExtensionCard
          key={index}
          extension={extension}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </>
  );
}
