import { Button } from '@digdir/designsystemet-react';
import { EarthIcon } from '@navikt/aksel-icons';
import ColorModeSwitch from './colorModeSwitch';

export function UtilityBar() {
  return (
    <div className="w-full flex justify-end mb-6 gap-1">

      <ColorModeSwitch />

      <Button>
        <EarthIcon />
      </Button>
    </div>
  );
}
