export function RemoveButton({ onRemove, extensionName }) {
  return (
    <button
      onClick={onRemove}
      className="w-[91px] h-[38px] rounded-full focus:shadow-[0_0_0_2px_#FBFDFE,0_0_0_4px_#F25C54]  focus:dark:shadow-[0_0_0_2px_#091540,0_0_0_4px_#F25C54] border py-[8px] px-[16px] border-Neutral-300 dark:border-Neutral-600 hover:bg-Red-700 hover:dark:bg-Red-400 hover:text-Neutral-0 hover:darK:text-Neutral-900 text-Neutral-900 dark:text-Neutral-0 text-[16px] leading-[140%] tracking-[-0.5px] flex justify-center items-center cursor-pointer"
      aria-label={`Remove ${extensionName}`}
    >
      Remove
    </button>
  );
}