import { Button } from '@digdir/designsystemet-react';
import { EarthIcon } from '@navikt/aksel-icons';
import ColorModeSwitch from './ColorModeSwitch';
import LanguageDropdown from './LanguageDropDown';

export function UtilityBar() {
  return (
    <div className="fixed top-0 right-0 flex items-center justify-center p-4 pr-6 z-[100]">
      <ColorModeSwitch />
      <LanguageDropdown />
    </div>
  );
}