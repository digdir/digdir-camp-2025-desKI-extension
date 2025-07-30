import { Button } from '@digdir/designsystemet-react';
import { EarthIcon } from '@navikt/aksel-icons';
import ColorModeSwitch from '../ColorModeSwitch/ColorModeSwitch';
import './UtilityBar.css';

export function UtilityBar() {
  return (
    <div className="utility-bar">
      <ColorModeSwitch />
      <Button
        aria-label="Choose language"
        className="utility-button"
      >
        <EarthIcon />
      </Button>
    </div>
  );
}
