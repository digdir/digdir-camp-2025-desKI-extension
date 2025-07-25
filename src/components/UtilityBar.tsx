
import ColorModeSwitch from './ColorModeSwitch';
import { LanguageDropdown } from './LanguageDropdown';

export function UtilityBar() {
  return (
    <div className="utility-bar">
      <ColorModeSwitch />
      <LanguageDropdown />
    </div>
  );
}