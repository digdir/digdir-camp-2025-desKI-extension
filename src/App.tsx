import { HashRouter, Routes, Route } from 'react-router-dom';
import { StartPage } from '../src/pages/StartPage';
import ChatPage from '../src/pages/ChatPage';
import { GridMenu } from '../src/pages/GridMenu';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/grid/:slug" element={<GridMenu />} />
        <Route path="/chat/:slug" element={<ChatPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;