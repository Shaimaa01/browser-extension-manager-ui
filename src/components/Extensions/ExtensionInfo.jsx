 export function ExtensionInfo({ name, description }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <h2 className="text-Neutral-0 font-bold text-[20px] leading-[120%] tracking-[-0.2px]">
        {name}
      </h2>
      <p className="text-Neutral-300 text-[16px] leading-[140%] tracking-[-0.5px]">
        {description}
      </p>
    </div>
  );
}