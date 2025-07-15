import { Button } from '@digdir/designsystemet-react';
import { MoonIcon, SunIcon } from '@navikt/aksel-icons';
import { ColorMode, useColorMode } from '../lib/settings';

export default function ColorModeSwitch() {
  const [colorMode, setColorMode] = useColorMode();

  // Fallback to system on first load — but only toggle light/dark manually
  const toggleColorMode = () => {
    const newMode = colorMode === 'dark' ? ColorMode.Light : ColorMode.Dark;
    setColorMode(newMode);
  };

  const colorModeText = () => {
    return colorMode === 'dark' ? <SunIcon /> : <MoonIcon />;
  };

  return (
    <Button
      variant="tertiary"
      className="bg-transparent text-current p-0 text-xl hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-current cursor-pointer outline-none border-none focus:outline-none focus:border-none active:outline-none active:border-none"
      onClick={toggleColorMode}
    >
      <span className="p-0 m-0">
        {colorModeText()}
      </span>
    </Button>
  );
}