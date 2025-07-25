import { Button } from '@digdir/designsystemet-react';
import { EarthIcon, MoonIcon } from '@navikt/aksel-icons';
import ColorModeSwitch from './ColorModeSwitch';
import LanguageDropdown from './LanguageDropdown';

export function UtilityBar() {
  return (
    <div className="fixed top-2 right-2 z-[100] flex items-center gap-0.5">
      <ColorModeSwitch />
      <LanguageDropdown />
    </div>
  );
}
