import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import { GridMenu } from './pages/GridMenu';
import Chat from './pages/ChatPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/brukerstøtte" element={<GridMenu />} />
      <Route path="/servicedesk" element={<GridMenu />} />
      <Route path="/brukerstøtte/:slug" element={<Chat />} />
      <Route path="/servicedesk/:slug" element={<Chat />} />
    </Routes>
  );
}

export default App;
