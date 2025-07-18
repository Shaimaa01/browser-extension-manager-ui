import { ExtensionLogo } from "./ExtensionLogo";
import { ExtensionInfo } from "./ExtensionInfo";
import { RemoveButton } from "./RemoveButton";
import { ToggleSwitch } from "./ToggleSwitch";

export function ExtensionCard({ extension, onToggle, onRemove}) {
  const handleToggle = () => onToggle(extension.name);
  const handleRemove = () => onRemove(extension.name);

  return (
    <div
      
      className="w-[343px] md:w-[346px] xl:w-[382px] h-[200px] rounded-[20px] border flex flex-col  justify-between p-[20px] bg-Neutral-0 dark:bg-Neutral-800 border-Neutral-200 dark:border-Neutral-600 shadow-[0_2px_2px_0_hsla(217,34%,82%,0.2),0_1px_5px_1px_hsla(217,34%,82%,0.22)] dark:shadow-none"
    >
      <div className="flex gap-[16px]">
        <ExtensionLogo src={extension.logo} alt={extension.name} />
        <ExtensionInfo
          name={extension.name}
          description={extension.description}
        />
      </div>

      <div className="flex justify-between items-center">
        <RemoveButton onRemove={handleRemove} extensionName={extension.name} />
        <ToggleSwitch
          isActive={extension.isActive}
          onToggle={handleToggle}
          label={`${extension.isActive ? "Deactivate" : "Activate"} ${
            extension.name
          }`}
        />
      </div>
    </div>
  );
}
