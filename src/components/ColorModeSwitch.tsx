import { Button, Tooltip } from "@digdir/designsystemet-react";
import { SunIcon, MoonIcon } from '@navikt/aksel-icons';
import { ColorMode, useColorMode } from '../lib/settings';

export default function ColorModeSwitch() {
  const [colorMode, setColorMode] = useColorMode();

  // Fallback to system on first load — but only toggle light/dark manually
  const toggleColorMode = () => {
    const newMode = colorMode === 'dark' ? ColorMode.Light : ColorMode.Dark;
    setColorMode(newMode);
  };

  const icon = colorMode === 'dark' ? <SunIcon className="utility-button-icon-size" /> : <MoonIcon className="utility-button-icon-size" />;
  const tooltipText = colorMode === 'dark' ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Tooltip content={tooltipText} placement="bottom">
      <Button
        variant="tertiary"
        className="btn-transparent"
        onClick={toggleColorMode}
      >
        {icon}
      </Button>
    </Tooltip>
  );
}