import { Routes, Route } from 'react-router-dom';
import StartPage from '../src/pages/StartPage';
import ChatPage from '../src/pages/ChatPage';
import { GridMenu } from '../src/pages/GridMenu';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/grid" element={<GridMenu />} />
      <Route path="/:slug" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
