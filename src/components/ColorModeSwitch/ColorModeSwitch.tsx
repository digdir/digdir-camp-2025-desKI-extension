import { Button, Tooltip } from "@digdir/designsystemet-react";
import { SunIcon, MoonIcon } from '@navikt/aksel-icons';
import { ColorMode, useColorMode } from '../../lib/settings';
import './ColorModeSwitch.css';

export default function ColorModeSwitch() {
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    const newMode = colorMode === 'dark' ? ColorMode.Light : ColorMode.Dark;
    setColorMode(newMode);
  };

  const icon = colorMode === 'dark' ? <SunIcon /> : <MoonIcon />;
  const tooltipText = colorMode === 'dark' ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Tooltip content={tooltipText} placement="bottom">
      <Button
        variant="tertiary"
        className="color-mode-button"
        onClick={toggleColorMode}
      >
        {icon}
      </Button>
    </Tooltip>
  );
}

