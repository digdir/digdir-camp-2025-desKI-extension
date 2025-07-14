import StartPage from '../src/pages/StartPage';
import ChatPage from "../src/pages/ChatPage";
import { GridMenu } from '../src/pages/GridMenu';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GridMenu />} />
          <Route path="/grid" element={<GridMenu />} />
          <Route path="/:slug" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App; 
