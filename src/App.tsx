import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import { GridMenu } from './pages/GridMenu/GridMenu';
import Chat from './pages/ChatPage/ChatPage';

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
