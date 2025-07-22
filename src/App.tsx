
import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import { GridMenu } from './pages/GridMenu';
import Chat from './pages/ChatPage';
import { UtilityBar } from './components/UtilityBar';
import { DarkThemeProvider } from './darkthemeprovider/DarkThemeProvider';

function App() {
  return (
    <DarkThemeProvider>
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
    </DarkThemeProvider>
  );
}

export default App;
