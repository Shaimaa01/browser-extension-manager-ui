export function EmptyState({ activeFilter, FILTER_OPTIONS }) {
  return (
    <div className="text-center py-12">
      <p className="text-neutral-400 text-lg mb-2">
        No {activeFilter.toLowerCase()} extensions found
      </p>
      <p className="text-neutral-500 text-sm">
        {activeFilter === FILTER_OPTIONS.ALL 
          ? "Add some extensions to get started" 
          : `Try switching to a different filter`}
      </p>
    </div>
  );
}