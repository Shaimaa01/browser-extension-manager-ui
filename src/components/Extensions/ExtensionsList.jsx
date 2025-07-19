import { useState, useEffect, useCallback, useMemo } from "react";
import { fetchExtensions } from "../../utils/fetchExtensions";
import { LoadingSpinner } from "./extensionsComponents/LoadingSpinner";
import { ErrorDisplay } from "./extensionsComponents/ErrorDisplay";
import { ExtensionsHeader } from "./extensionsComponents/ExtensionsHeader";
import { FilterControls } from "./extensionsComponents/FilterControls";
import { ExtensionsGrid } from "./extensionsComponents/ExtensionsGrid";

const FILTER_OPTIONS = {
  ALL: "All",
  ACTIVE: "Active",
  INACTIVE: "Inactive",
};

export function ExtensionsList() {
  const [extensions, setExtensions] = useState([]);
  const [activeFilter, setActiveFilter] = useState(FILTER_OPTIONS.ALL);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const displayedExtensions = useMemo(() => {
    switch (activeFilter) {
      case FILTER_OPTIONS.ACTIVE:
        return extensions.filter((ext) => ext.isActive);
      case FILTER_OPTIONS.INACTIVE:
        return extensions.filter((ext) => !ext.isActive);
      default:
        return extensions;
    }
  }, [activeFilter, extensions]);

  const loadExtensions = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const fetchedData = await fetchExtensions();
      const storedExtensions = JSON.parse(
        localStorage.getItem("extensions") || "[]"
      );

      let updatedExtensions =
        storedExtensions.length > 0 ? storedExtensions : fetchedData;

      setExtensions(updatedExtensions);

      localStorage.setItem("extensions", JSON.stringify(updatedExtensions));
    } catch (err) {
      setError("Failed to load extensions. Please try again.");
      console.error("Failed to load extensions:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadExtensions();
  }, [loadExtensions]);

  const toggleExtension = useCallback((name) => {
    setExtensions((prev) => {
      const newExtensions = prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      );
      localStorage.setItem("extensions", JSON.stringify(newExtensions));
      return newExtensions;
    });
  }, []);

  const removeExtension = useCallback((name) => {
    setExtensions((prev) => {
      const newExtensions = prev.filter((ext) => ext.name !== name);
      localStorage.setItem("extensions", JSON.stringify(newExtensions));
      return newExtensions;
    });
  }, []);

  const handleFilterChange = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorDisplay error={error} onRetry={loadExtensions} />;
  }

  return (
    <main className="flex flex-col ">
      <section className="flex flex-col  items-center gap-[32px]">
        <div className=" w-full flex flex-col md:flex-row md:justify-between justify-center items-center  gap-[24px]">
          <ExtensionsHeader />

          <FilterControls
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            FILTER_OPTIONS={FILTER_OPTIONS}
          />
        </div>

        <div
          id="extensions-list"
          className="flex flex-wrap justify-center items-center gap-[12px]"
          role="tabpanel"
          aria-label={`${activeFilter} extensions`}
        >
          <ExtensionsGrid
            extensions={displayedExtensions}
            onToggle={toggleExtension}
            onRemove={removeExtension}
            activeFilter={activeFilter}
            FILTER_OPTIONS={FILTER_OPTIONS}
          />
        </div>
      </section>
    </main>
  );
}

