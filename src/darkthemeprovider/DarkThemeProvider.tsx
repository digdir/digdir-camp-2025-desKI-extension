import { useEffect, useState, ReactNode } from 'react';
import {
  type ColorMode,
  Setting,
  UserSettingsContext,
  getSetting,
  setSettings,
} from '../lib/settings';

interface DarkThemeProviderProps {
  children: ReactNode;
}

export function DarkThemeProvider({ children }: DarkThemeProviderProps) {
  const [colorMode, setColorModeState] = useState<ColorMode>(() => {
    const saved = getSetting(Setting.ColorMode);
    return saved || 'light';
  });

  const setColorMode = (newMode: ColorMode) => {
    setColorModeState(newMode);
    setSettings({ [Setting.ColorMode]: newMode });
  };

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark =
      colorMode === 'dark' || (colorMode === 'auto' && prefersDark);

    const html = document.documentElement;
    html.setAttribute('data-color-scheme', shouldUseDark ? 'dark' : 'light');
    html.classList.remove('dark', 'light');
    html.classList.add(shouldUseDark ? 'dark' : 'light');
  }, [colorMode]);

  return (
    <UserSettingsContext.Provider value={{ [Setting.ColorMode]: colorMode, setColorMode }}>
      {children}
    </UserSettingsContext.Provider>
  );
}
