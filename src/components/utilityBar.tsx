import { Button } from '@digdir/designsystemet-react';
import { EarthIcon } from '@navikt/aksel-icons';
import ColorModeSwitch from './ColorModeSwitch';

export function UtilityBar() {
  return (
    <div className="w-full flex justify-end mb-6 gap-1">

      <ColorModeSwitch />

      <Button className='bg-transparent text-current p-0 text-xl hover:bg-neutral-200 hover:text-current cursor-pointer outline-none border-none focus:outline-none focus:border-none active:outline-none active:border-none'>
        <EarthIcon />
      </Button>
    </div>
  );
}
