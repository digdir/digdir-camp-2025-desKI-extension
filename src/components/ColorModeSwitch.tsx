import { Button, Tooltip } from "@digdir/designsystemet-react";
import { SunIcon, MoonIcon } from '@navikt/aksel-icons';
import { ColorMode, useColorMode } from '../lib/settings';

export default function ColorModeSwitch() {
  const [colorMode, setColorMode] = useColorMode();

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
        className="text-foreground hover:bg-muted hover:text-foreground p-0 text-lg border-none outline-none"
      >
        {icon}
      </Button>
    </Tooltip>
  );
}