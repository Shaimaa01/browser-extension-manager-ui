import { useState, useEffect } from "react";
import { fetchExtensions } from "../utils/fetchExtensions";

export function ExtensionsList() {
  const [extensions, setExtensions] = useState([]);
 const [displayedExtensions, setDisplayedExtensions] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const loadExtensions = async () => {
    try {
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
      setDisplayedExtensions(updatedExtensions);
      localStorage.setItem("extensions", JSON.stringify(updatedExtensions));
      localStorage.setItem("lastFetched", JSON.stringify(fetchedData));
    } catch (error) {
      console.error("Failed to load extensions:", error);
    }
  };

  useEffect(() => {
    loadExtensions();
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setDisplayedExtensions(extensions);
    } else if (activeFilter === "Active") {
      setDisplayedExtensions(extensions.filter((item) => item.isActive));
    } else if (activeFilter === "Inactive") {
      setDisplayedExtensions(extensions.filter((item) => !item.isActive));
    }
  }, [extensions, activeFilter]);

  // Toggle extension
  function toggleExtension(name) {
    setExtensions((prev) => {
      const newExtensions = prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      );
      localStorage.setItem("extensions", JSON.stringify(newExtensions));
      return newExtensions;
    });
  }

  // Remove extension
  function removeExtension(name) {
    setExtensions((prev) => {
      const newExtensions = prev.filter((ext) => ext.name !== name);
      localStorage.setItem("extensions", JSON.stringify(newExtensions));
      return newExtensions;
    });
  }

  // Filter buttons
  function allExtensions() {
    setActiveFilter("All");
  }

  function activeExtensions() {
    setActiveFilter("Active");
  }

  function inactiveExtensions() {
    setActiveFilter("Inactive");
  }

  return (
    <main className="flex flex-col ">
      <section className="flex flex-col  items-center gap-[24px]">
        <h1 className="text-center font-bold text-[34px] leading-[100%] tracking-[-1px] text-Neutral-0">
          Extensions List
        </h1>
        <div className="flex gap-[12px] h-[46px]">
          <button
            onClick={allExtensions}
            className={`rounded-full w-[64px] font-medium text-[20px] tracking-[-0.3px] leading-[140%] cursor-pointer ${
              activeFilter === "All"
                ? "bg-Red-400 text-Neutral-900"
                : "bg-Neutral-700 border border-Neutral-600 text-Neutral-0"
            }`}
          >
            All
          </button>
          <button
            className={`px-[20px] pt-[8px] pb-[10px] rounded-full font-medium text-[20px] tracking-[-0.3px] leading-[140%] cursor-pointer ${
              activeFilter === "Active"
                ? "bg-Red-400 text-Neutral-900"
                : "bg-Neutral-700 border border-Neutral-600 text-Neutral-0"
            }`}
            onClick={activeExtensions}
          >
            Active
          </button>
          <button
            onClick={inactiveExtensions}
            className={`px-[20px] pt-[8px] pb-[10px] rounded-full font-medium text-[20px] tracking-[-0.3px] leading-[140%] cursor-pointer ${
              activeFilter === "Inactive"
                ? "bg-Red-400 text-Neutral-900"
                : "bg-Neutral-700 border border-Neutral-600 text-Neutral-0"
            }`}
          >
            Inactive
          </button>
        </div>
        {/* card */}

        {displayedExtensions?.map((extension, index) => (
          <div
            key={index}
            className="w-[343px] h-[200px] rounded-[20px] border flex flex-col  justify-between p-[20px] bg-Neutral-800 border-Neutral-600"
          >
            <div className="flex gap-[16px]">
              <img
                src={extension.logo}
                alt={extension.name}
                className="w-[60px] h-[60px] rounded-[10px]"
              ></img>
              <div className="flex flex-col gap-[8px]">
                <h2 className="text-Neutral-0 font-bold text-[20px] leading-[120%] tracking-[-0.2px]">
                  {extension.name}
                </h2>
                <p className="text-Neutral-300 text-[16px] leading-[140%] tracking-[-0.5px]">
                  {extension.description}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => removeExtension(extension.name)}
                className="w-[91px] h-[38px] rounded-full border py-[8px] px-[16px] border-Neutral-600 text-Neutral-0 text-[16px] leading-[140%] tracking-[-0.5px] flex justify-center items-center cursor-pointer"
              >
                Remove
              </button>

              <button
                onClick={() => toggleExtension(extension.name)}
                className={`w-[36px] h-[20px] rounded-full p-[2px]  relative ${
                  extension.isActive ? "bg-Red-400" : "bg-Neutral-600"
                }`}
              >
                <span
                  className={` absolute w-[16px] h-[16px] rounded-full bg-Neutral-0 top-1/2 -translate-y-1/2   shadow-[0px_1px_2px_-1px_#09154099,0px_1px_3px_0px_#0A0D121A] transition-transform duration-300 ease-in-out cursor-pointer  ${
                    extension.isActive ? "translate-x-0" : "-translate-x-[16px]"
                  } `}
                ></span>
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default ExtensionsList;
