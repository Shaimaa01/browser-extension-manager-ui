export function RemoveButton({ onRemove, extensionName }) {
  return (
    <button
      onClick={onRemove}
      className="w-[91px] h-[38px] rounded-full border py-[8px] px-[16px] border-Neutral-600 text-Neutral-0 text-[16px] leading-[140%] tracking-[-0.5px] flex justify-center items-center cursor-pointer"
      aria-label={`Remove ${extensionName}`}
    >
      Remove
    </button>
  );
}