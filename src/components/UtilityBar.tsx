import { Button } from '@digdir/designsystemet-react';
import { EarthIcon } from '@navikt/aksel-icons';
import ColorModeSwitch from './ColorModeSwitch';

export function UtilityBar() {
  return (
    <div className="utility-bar">
      <ColorModeSwitch />
      <Button
        aria-label="Choose language"
        className="btn-transparent"
      >
        <EarthIcon />
      </Button>
    </div>
  );
}