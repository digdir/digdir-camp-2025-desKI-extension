import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import StartPage from './pages/StartPage';
import { GridMenu } from './pages/GridMenu';
import Chat from './pages/ChatPage';
import { UtilityBar } from './components//UtilityBar';
import {
  type ColorMode,
  Setting,
  UserSettingsContext,
  getSetting,
  setSettings,
} from './lib/settings';

function App() {
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
      <div id="app-root">
        <UtilityBar />
        <main>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/brukerstøtte" element={<GridMenu />} />
            <Route path="/servicedesk" element={<GridMenu />} />
            <Route path="/brukerstøtte/:slug" element={<Chat />} />
            <Route path="/servicedesk/:slug" element={<Chat />} />
          </Routes>
        </main>
      </div>
    </UserSettingsContext.Provider>
  );
}

export default App;
