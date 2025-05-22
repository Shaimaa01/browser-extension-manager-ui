import { useState, useEffect } from "react";
import { fetchExtensions } from "../utils/fetchExtensions";

export function ExtensionsList() {
  const [isActive, setIsActive] = useState(true);
  const [extensions, setExtensions] = useState([]);

  function toggleExtension() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    fetchExtensions().then((data) => {
      setExtensions(data);
    });
  }, []);

  console.log(extensions);

  return (
    <main className="flex flex-col ">
      <section className="flex flex-col  items-center gap-[24px]">
        <h1 className="text-center font-bold text-[34px] leading-[100%] tracking-[-1px] text-Neutral-0">
          Extensions List
        </h1>
        <div className="flex gap-[12px] h-[46px]">
          <button
            className={`bg-Red-400 rounded-full w-[64px]   text-Neutral-900 font-medium text-[20px] tracking-[-0.3px] leading-[140%] cursor-pointer`}
          >
            All
          </button>
          <button className="bg-Neutral-700 border border-Neutral-600   px-[20px] pt-[8px] pb-[10px] rounded-full text-Neutral-0  text-[20px] tracking-[-0.3px] leading-[140%] cursor-pointer">
            Active
          </button>
          <button className="bg-Neutral-700 border border-Neutral-600   px-[20px] pt-[8px] pb-[10px] rounded-full text-Neutral-0  text-[20px] tracking-[-0.3px] leading-[140%]  cursor-pointer">
            Inactive
          </button>
        </div>
        {/* card */}

        {extensions?.map((extension) => (
          <div className="w-[343px] h-[200px] rounded-[20px] border flex flex-col  justify-between p-[20px] bg-Neutral-800 border-Neutral-600">
            <div className="flex gap-[16px]">
              <img
                src={extension.logo}
                alt="img"
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
              <button className="w-[91px] h-[38px] rounded-full border py-[8px] px-[16px] border-Neutral-600 text-Neutral-0 text-[16px] leading-[140%] tracking-[-0.5px] flex justify-center items-center">
                Remove
              </button>

              <button
                onClick={toggleExtension}
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
