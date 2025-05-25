import { useState, useEffect, useCallback, useMemo } from "react";
import { fetchExtensions } from "../../utils/fetchExtensions";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorDisplay } from "./ErrorDisplay";
import { ExtensionsHeader } from "./ExtensionsHeader";
import { FilterControls } from "./FilterControls";
import { ExtensionsGrid } from "./ExtensionsGrid";

export function ExtensionsList() {
  const FILTER_OPTIONS = {
    ALL: "All",
    ACTIVE: "Active",
    INACTIVE: "Inactive",
  };
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
  }, [
    activeFilter,
    FILTER_OPTIONS.ACTIVE,
    FILTER_OPTIONS.INACTIVE,
    extensions,
  ]);

  const loadExtensions = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const fetchedData = await fetchExtensions();
      const storedExtensions = JSON.parse(
        localStorage.getItem("extensions") || "[]"
      );
      const lastFetched = JSON.parse(
        localStorage.getItem("lastFetched") || "[]"
      );

      let updatedExtensions =
        storedExtensions.length > 0 ? storedExtensions : fetchedData;

      const newExtensions = fetchedData.filter(
        (f) => !lastFetched.some((l) => l.name === f.name)
      );

      if (newExtensions.length > 0) {
        updatedExtensions = [...updatedExtensions, ...newExtensions];
      }
      setExtensions(updatedExtensions);

      localStorage.setItem("extensions", JSON.stringify(updatedExtensions));
      localStorage.setItem("lastFetched", JSON.stringify(fetchedData));
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
