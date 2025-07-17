import { Button } from '@digdir/designsystemet-react';
import { EarthIcon, MoonIcon } from '@navikt/aksel-icons';

export function UtilityBar() {
  return (
    <div className="fixed top-2 right-2 z-[100] flex items-center gap-0.5">
      <Button
        className="bg-transparent text-[color:var(--ds-color-main-text)] p-0 text-lg hover:bg-[color:var(--ds-color-neutral-surface-hover)] hover:text-[color:var(--ds-color-main-text)] focus:outline-none border-none outline-none"
      >
        <MoonIcon className="p-0 m-0" />
      </Button>
      <Button
        className="bg-transparent text-[color:var(--ds-color-main-text)] p-0 text-lg hover:bg-[color:var(--ds-color-neutral-surface-hover)] hover:text-[color:var(--ds-color-main-text)] focus:outline-none border-none outline-none"
      >
        <EarthIcon />
      </Button>
    </div>
  );
}
